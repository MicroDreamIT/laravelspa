<?php


Route::get('/{any}', function () {
//    dd(\Illuminate\Support\Facades\Auth::Guard()->user());
    return view('layouts.app');
})->where('any','.*');
