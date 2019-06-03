<?php


Route::get('/{any}', function () {
//    \App\User::create([
//        'name'=>'john',
//        'email'=>'admin@admin.com',
//        'password'=>\Illuminate\Support\Facades\Hash::make('123123')
//    ]);
    return view('layouts.app');
})->where('any','.*');
