<?php


namespace App\Utils\Yandex;


use Arhitector\Yandex\Disk;

class YandexAdapter
{

    /**
     * @var Disk
     */
    private static $instance;

    /**
     * @var bool
     */
    private static $initialized = false;

    /**
     * @return Disk
     */
    public static function getInstance(): Disk
    {
        if (!self::$initialized) {
            throw new \Exception("Yandex API not initialized");
        }
        
        return self::$instance;
    }

    private function __construct()
    {
    }

    public static function init()
    {
        $disk = new Disk(env("YANDEX_API_KEY"));
        self::$instance = $disk;
        self::$initialized = true;
    }


}
