<?php namespace ScoutsWarsawZoliborz\RozkazyHufca\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateScoutswarsawzoliborzRozkazyhufcaRozkazy2 extends Migration
{
    public function up()
    {
        Schema::table('scoutswarsawzoliborz_rozkazyhufca_rozkazy', function($table)
        {
            $table->date('order_date')->nullable(false)->change();
        });
    }
    
    public function down()
    {
        Schema::table('scoutswarsawzoliborz_rozkazyhufca_rozkazy', function($table)
        {
            $table->date('order_date')->nullable()->change();
        });
    }
}
