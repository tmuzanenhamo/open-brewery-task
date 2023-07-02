<?php

namespace App\Http\Controllers;

use App\ApiRequests\OpenBrewery\OpenBreweryRequest;
use App\Transformers\OpenBreweryTransformer;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class OpenBreweryController extends BaseController
{
    public function index(OpenBreweryRequest $api_request, Request $request)
    {
        try {
            $page = $request->input('page', 1);
            $per_page = $request->input('per_page', 10);

            $response = $api_request->get(['page' => $page, 'per_page' => $per_page]);

            $transformedResponse = collect($response)->map(function ($item) {
                return OpenBreweryTransformer::transform($item);
            })->toArray();

            return response()->json($transformedResponse);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function show(OpenBreweryRequest $api_request, string $name)
    {
        try {
            $response = $api_request->get(['by_name' => $name]);

            $transformedResponse = collect($response)->map(function ($item) {
                return OpenBreweryTransformer::transform($item);
            })->toArray();

            return response()->json($transformedResponse);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
