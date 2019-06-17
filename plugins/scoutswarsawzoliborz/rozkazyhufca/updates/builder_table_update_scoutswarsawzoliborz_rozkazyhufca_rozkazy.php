<?php namespace ScoutsWarsawZoliborz\RozkazyHufca\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateScoutswarsawzoliborzRozkazyhufcaRozkazy extends Migration
{
    public function up()
    {
        Schema::table('scoutswarsawzoliborz_rozkazyhufca_rozkazy', function($table)
        {
            $table->boolean('is_special_order');
        });
    }
    
    public function down()
    {
        Schema::table('scoutswarsawzoliborz_rozkazyhufca_rozkazy', function($table)
        {
            $table->dropColumn('is_special_order');
        });
    }
}
