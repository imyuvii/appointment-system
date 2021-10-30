<?php

namespace App\Http\Requests;

use App\Models\Appointment;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreAppointmentRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('appointment_create');
    }

    public function validationData()
    {
        $data = parent::validationData();

        return array_merge($data, [
            'start_time' => $data['date']. " " . $data['start_time'] . ":00",
            'end_time' => $data['date']. " " . $data['end_time'].":00",
        ]);
    }

    public function rules()
    {
        return [
            'title' => [
                'string',
                'required',
            ],
            'start_time' => [
                'date_format:' . config('project.datetime_format'),
                'required',
            ],
            'end_time' => [
                'date_format:' . config('project.datetime_format'),
                'required',
                'date',
                'after:start_date'
            ],
            'notes' => [
                'string',
                'nullable',
            ],
            'attachments' => [
                'array',
                'nullable',
            ],
            'attachments.*.id' => [
                'integer',
                'exists:media,id',
            ],
        ];
    }
}
