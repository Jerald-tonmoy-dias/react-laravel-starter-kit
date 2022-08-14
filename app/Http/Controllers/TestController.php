<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    // test data
    public function index()
    {
        return 'data ashtese controller theke';
    }
}