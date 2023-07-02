<?php

namespace App\Providers\OpenBrewery;

use App\ApiRequests\OpenBrewery\OpenBreweryRequest;
use Illuminate\Support\ServiceProvider;

class OpenBreweryProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(OpenBreweryRequest::class, function ($app) {
            return new OpenBreweryRequest(
                config('openbrewery.endpoint')
            );
        });
    }
}
