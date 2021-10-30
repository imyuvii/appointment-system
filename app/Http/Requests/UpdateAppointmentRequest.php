<?php

namespace App\Http\Requests;

use App\Models\Appointment;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateAppointmentRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('appointment_edit');
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
