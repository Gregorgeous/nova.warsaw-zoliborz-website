<?php namespace ScoutsWarsawZoliborz\ListaMailingowaRozkazy\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateScoutswarsawzoliborzListamailingowarozkazyListamaili extends Migration
{
    public function up()
    {
        Schema::create('scoutswarsawzoliborz_listamailingowarozkazy_listamaili', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->text('fullname');
            $table->text('mail');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('scoutswarsawzoliborz_listamailingowarozkazy_listamaili');
    }
}
