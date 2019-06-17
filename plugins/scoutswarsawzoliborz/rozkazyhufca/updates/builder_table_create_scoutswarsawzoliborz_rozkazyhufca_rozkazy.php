<?php namespace ScoutsWarsawZoliborz\RozkazyHufca\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateScoutswarsawzoliborzRozkazyhufcaRozkazy extends Migration
{
    public function up()
    {
        Schema::create('scoutswarsawzoliborz_rozkazyhufca_rozkazy', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('order_issue_number');
            $table->date('order_date')->nullable();
            $table->text('order_content')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('scoutswarsawzoliborz_rozkazyhufca_rozkazy');
    }
}
