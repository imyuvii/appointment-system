<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAppointmentRequest;
use App\Http\Requests\UpdateAppointmentRequest;
use App\Http\Resources\Admin\AppointmentResource;
use App\Models\Appointment;
use Carbon\Carbon;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Validator;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class AppointmentsApiController extends Controller
{
    /**
     * Landing page
     * @return AppointmentResource
     */
    public function index()
    {
        abort_if(Gate::denies('appointment_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $start_date = Carbon::now();
        $end_date = Carbon::now()->addHours(2);
        $user_id = Auth::id();
        $appointments = Appointment::whereRaw("user_id = {$user_id} and (('{$start_date}' BETWEEN start_time and end_time) or ('{$end_date}' BETWEEN start_time and end_time))")
            ->advancedFilter();
        return new AppointmentResource($appointments);
    }

    /**
     * Create new appointment
     * @param StoreAppointmentRequest $request
     * @return \Illuminate\Http\JsonResponse|object
     */
    public function store(Request $request)
    {
        $appointment = $request->input();
        $appointment['start_time'] = $appointment['date']. " " . $appointment['start_time'] . ":00";
        $appointment['end_time'] = $appointment['date']. " " . $appointment['end_time'] . ":00";
        $appointment['user_id'] = Auth::id();
        unset($appointment['date']);
        $error = $error_code = null;
        if(strtotime($appointment['end_time']) > strtotime($appointment['start_time'])) {
            $user_id = Auth::id();
            $existing_appointment = Appointment::whereRaw("user_id = {$user_id} and (('{$appointment['start_time']}' BETWEEN start_time and end_time) or ('{$appointment['end_time']}' BETWEEN start_time and end_time))")->count();
            if($existing_appointment > 0) {
                $error = "Appointment not available on selected time slot";
                $error_code = 423;
            }
        } else {
            $error = "End time must be greater than start time";
            $error_code = 423;
        }
        if($error === null) {
            $appointment = Appointment::create($appointment);

            if ($media = $request->input('attachments', [])) {
                Media::whereIn('id', data_get($media, '*.id'))
                    ->where('model_id', 0)
                    ->update(['model_id' => $appointment->id]);
            }

            return (new AppointmentResource($appointment))
                ->response()
                ->setStatusCode(Response::HTTP_CREATED);
        } else {
            return response()->json([
                "result" => false,
                "error" => $error
            ], $error_code);
        }
    }

    /**
     * Create appointment form
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function create()
    {
        abort_if(Gate::denies('appointment_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    /**
     * Get appointment by id
     * @param Appointment $appointment
     * @return AppointmentResource
     */
    public function show(Appointment $appointment)
    {
        abort_if(Gate::denies('appointment_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new AppointmentResource($appointment);
    }

    /**
     * Update appointments
     * @param UpdateAppointmentRequest $request
     * @param Appointment $appointment
     * @return \Illuminate\Http\JsonResponse|object
     */
    public function update(UpdateAppointmentRequest $request, Appointment $appointment)
    {
        $appointment->update($request->validated());

        $appointment->updateMedia($request->input('attachments', []), 'appointment_attachments');

        return (new AppointmentResource($appointment))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    /**
     * Edit appointments
     * @param Appointment $appointment
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function edit(Appointment $appointment)
    {
        abort_if(Gate::denies('appointment_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new AppointmentResource($appointment),
            'meta' => [],
        ]);
    }

    /**
     * Delete Attachments
     * @param Appointment $appointment
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function destroy(Appointment $appointment)
    {
        abort_if(Gate::denies('appointment_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $appointment->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    /**
     *
     * Save Attachments files
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     * @throws \Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist
     * @throws \Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig
     */
    public function storeMedia(Request $request)
    {
        abort_if(Gate::none(['appointment_create', 'appointment_edit']), Response::HTTP_FORBIDDEN, '403 Forbidden');

        if ($request->has('size')) {
            $this->validate($request, [
                'file' => 'max:' . $request->input('size') * 1024,
            ]);
        }

        $model         = new Appointment();
        $model->id     = $request->input('model_id', 0);
        $model->exists = true;
        $media         = $model->addMediaFromRequest('file')->toMediaCollection($request->input('collection_name'));

        return response()->json($media, Response::HTTP_CREATED);
    }

    /**
     * Get Events for calendar
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getEvents(Request $request) {
        try {
            $appointments = Appointment::selectRaw(DB::raw('id, title, date(start_time) as date, start_time, end_time'))
                ->where('user_id','=', Auth::id())
                ->whereNull('deleted_at')
                ->get();
            $data = [];
            foreach ($appointments as $appointment) {
                $start_time = date("h:i A", strtotime($appointment->start_time));
                $end_time = date("h:i A", strtotime($appointment->end_time));
                $appointment->title = "{$appointment->title} ({$start_time} - {$end_time})";
                array_push($data, $appointment);
            }
            return response()->json([
                "result" => true,
                "data" => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                "result" => false,
                "error_code" => 500,
                "error_message" => $e->getMessage()
            ], 500);
        }

    }
}
