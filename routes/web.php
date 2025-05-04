<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Route::middleware(['auth', 'verified'])->group(function () {
Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->name('dashboard');
Route::get('/spreadsheet', function () {
    return Inertia::render('spreadsheet');
})->name('spreadsheet');
Route::get('/documenteditor', function () {
    return Inertia::render('documenteditor');
})->name('documenteditor');
// });

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
