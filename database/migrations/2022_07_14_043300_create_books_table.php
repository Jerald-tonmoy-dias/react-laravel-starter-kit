<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->longText('name')->nullable();
            $table->longText('slug')->nullable();
            $table->longText('thumbnail')->nullable();
            $table->longText('banner')->nullable();
            $table->longText('views')->nullable();
            $table->longText('short_desc')->nullable();
            $table->longText('big_desc')->nullable();
            $table->longText('pdf')->nullable();
            $table->longText('audio')->nullable();
            $table->longText('type')->nullable(); //free or premium
            $table->longText('ratings')->nullable(); //calculate from ratings table
            $table->longText('pages')->nullable();
            $table->longText('readable_pages')->nullable(); //integer 3
            $table->longText('price')->nullable();
            $table->longText('isbn')->nullable();
            $table->longText('edition')->nullable();
            $table->longText('stocks')->nullable();
            $table->longText('tags')->nullable(); //array
            $table->boolean('has_discount')->nullable();
            $table->longText('discount_price')->nullable();
            $table->longText('publishers')->nullable();
            $table->longText('languages')->nullable();
            $table->unsignedBigInteger('author_id')->nullable();
            $table->unsignedBigInteger('categories_id')->nullable(); //array
            $table->boolean('status')->nullable();
            $table->boolean('featured')->nullable();
            $table->boolean('popular')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
};