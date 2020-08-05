<?php

namespace App\Http\Requests\FileUploader;

use Illuminate\Foundation\Http\FormRequest;

class Upload extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'file_url' => ['required', 'string'],
            'yandex_file_name' => ['required', 'string']
        ];
    }
}
