<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        $users = [
            [
                'id'             => 1,
                'name'           => 'Yoda',
                'email'          => 'yoda@lorem.com',
                'password'       => bcrypt('abc@12345'),
                'remember_token' => null,
            ],
            [
                'id'             => 2,
                'name'           => 'Han Solo',
                'email'          => 'han.solo@lorem.com',
                'password'       => bcrypt('abc@12345'),
                'remember_token' => null,
            ],
            [
                'id'             => 3,
                'name'           => 'Obi-Wan Kenobi',
                'email'          => 'obiwan.kenobi@lorem.com',
                'password'       => bcrypt('abc@12345'),
                'remember_token' => null,
            ],
            [
                'id'             => 4,
                'name'           => 'Darth Vedar',
                'email'          => 'darth.vedar@lorem.com',
                'password'       => bcrypt('abc@12345'),
                'remember_token' => null,
            ],
            [
                'id'             => 5,
                'name'           => 'Kylo Ren',
                'email'          => 'kylo.ren@lorem.com',
                'password'       => bcrypt('abc@12345'),
                'remember_token' => null,
            ],
            [
                'id'             => 6,
                'name'           => 'Padme',
                'email'          => 'padme@lorem.com',
                'password'       => bcrypt('abc@12345'),
                'remember_token' => null,
            ],
        ];

        User::insert($users);
    }
}
