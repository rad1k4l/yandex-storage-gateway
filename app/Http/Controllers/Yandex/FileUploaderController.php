<?php

namespace App\Http\Controllers\Yandex;

use App\Http\Controllers\Controller;
use App\Http\Requests\FileUploader\Upload;
use App\Utils\Yandex\YandexAdapter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileUploaderController extends Controller
{
    public function upload(Upload $request)
    {
        $yandex = YandexAdapter::getInstance();
        $validated = $request->validated();

        try {
            $resource = $yandex->getResource($validated['yandex_file_name']);
            if (!$resource->isPublish()) {
                $resource->setPublish(true);
            }
            $resource->upload($validated['file_url']);
        } catch (\Exception $exception) {
            return response()->json([
                'status' => "err",
                'msg' => $exception->getMessage()
            ], 500);
        }

        return response()->json([
            'status' => 'ok',
            'url' => route('api.yandex.file.retrieve', [
                'file_name' => $validated['yandex_file_name']
            ])
        ]);
    }
}
