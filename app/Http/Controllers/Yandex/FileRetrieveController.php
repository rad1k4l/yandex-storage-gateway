<?php

namespace App\Http\Controllers\Yandex;

use App\Http\Controllers\Controller;
use App\Utils\Yandex\YandexAdapter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;

class FileRetrieveController extends Controller
{
    public function retrieve(string $fileName)
    {
        $yandex = YandexAdapter::getInstance();

        try {
            $resource = $yandex->getResource($fileName);
            $resource->setPublish();
            $yandexFileInfo = $resource->toArray();
        } catch (\Exception $exception) {
            abort(404);
            return null;
        }
        dd($yandexFileInfo);
//        $response = Http::get($yandexFileInfo['file']);

        return response()->file($yandexFileInfo['file']);
    }
}
