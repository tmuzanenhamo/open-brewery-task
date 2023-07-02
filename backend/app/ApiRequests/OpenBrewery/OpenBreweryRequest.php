<?php

namespace App\ApiRequests\OpenBrewery;

class OpenBreweryRequest extends OpenBreweryBase
{
    private string $resource = 'breweries';

    public function get(array $params = []): array
    {
        $response = $this->client->get($this->resource.'?'.http_build_query($params));

        return json_decode($response->getBody()->getContents(), true);
    }
}
