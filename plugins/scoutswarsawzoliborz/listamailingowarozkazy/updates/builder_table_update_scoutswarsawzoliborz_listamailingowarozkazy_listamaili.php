<?php namespace ScoutsWarsawZoliborz\ListaMailingowaRozkazy\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateScoutswarsawzoliborzListamailingowarozkazyListamaili extends Migration
{
    public function up()
    {
        Schema::table('scoutswarsawzoliborz_listamailingowarozkazy_listamaili', function($table)
        {
            $table->increments('id')->unsigned(false)->change();
        });
    }
    
    public function down()
    {
        Schema::table('scoutswarsawzoliborz_listamailingowarozkazy_listamaili', function($table)
        {
            $table->increments('id')->unsigned()->change();
        });
    }
}
