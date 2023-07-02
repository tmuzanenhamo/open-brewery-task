<?php

use Illuminate\Http\Response;
use Tests\TestCase;

class OpenBreweryControllerTest extends TestCase
{
    /**
     * Test the index endpoint.
     *
     * @return void
     */
    public function testIndex()
    {
        $request_params = [
            'page' => 1,
            'per_page' => 10,
        ];

        $response = $this->json(
            'GET',
            'api/breweries',
            $request_params,
        );

        $response->assertStatus(Response::HTTP_OK);
    }

    public function testShow()
    {
        $request_params = [
            'page' => 1,
            'per_page' => 1,
        ];

        $response = $this->json(
            'GET',
            'api/breweries',
            $request_params,
        );

        $name = json_decode($response->getContent())[0]->name;

        $response = $this->json(
            'GET',
            sprintf('api/breweries/%s', $name),
        );

        $response->assertStatus(Response::HTTP_OK);
    }
}
