<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => 'Manager',
            'email' => 'manager@pizza.ru',
            'email_verified_at' => now(),
            'password' => '$2b$10$5eQWienEIDNh8FxtZA3mGu.2FRV02.x5bR6WC53ek0yKoyimeeq.e', // likepizza
            'remember_token' => Str::random(10),
        ];
    }
}
