<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEstimatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estimates', function (Blueprint $table) {
            $table->increments('id');
            $table->date('estimate_date');
            $table->date('expiry_date');
            $table->string('estimate_number');
            $table->string('status');
            $table->string('reference_number')->nullable();
            $table->string('tax_per_item');
            $table->string('discount_per_item');
            $table->string('notes')->nullable();
            $table->decimal('discount', 15, 0)->nullable();
            $table->string('discount_type')->nullable();
            $table->integer('discount_val')->nullable();
            $table->integer('sub_total');
            $table->integer('total');
            $table->integer('tax');
            $table->string('unique_hash')->nullable();
            $table->integer('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->integer('estimate_template_id')->unsigned()->nullable();
            $table->foreign('estimate_template_id')->references('id')->on('estimate_templates');
            $table->integer('company_id')->unsigned()->nullable();
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
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
        Schema::dropIfExists('estimates');
    }
}
