<?php

namespace App\Transformers;

class OpenBreweryTransformer
{
    public static function transform($item)
    {
        return [
            'id' => $item['id'] ?? null,
            'name' => $item['name'] ?? null,
            'brewery_type' => $item['brewery_type'] ?? null,
            'phone' => $item['phone'] ?? null,
            'website_url' => $item['website_url'] ?? null,
            'address' => [
                'address_1' => $item['address_1'] ?? null,
                'address_2' => $item['address_2'] ?? null,
                'address_3' => $item['address_3'] ?? null,
                'city' => $item['city'] ?? null,
                'state' => $item['state_province'] ?? null,
                'street' => $item['street'] ?? null,
                'country' => $item['country'] ?? null,
                'state_province' => $item['state_province'] ?? null,
                'postal_code' => $item['postal_code'] ?? null,
                'longitude' => $item['longitude'] ?? null,
                'latitude' => $item['latitude'] ?? null,
            ],
        ];
    }
}
