<?php

namespace App\ApiRequests\OpenBrewery;

use GuzzleHttp\Client;

class OpenBreweryBase
{
    public $client;

    public function __construct(
        private string $url
    ) {
        $this->client = new Client([
            'base_uri' => $this->url,
        ]);
    }
}
