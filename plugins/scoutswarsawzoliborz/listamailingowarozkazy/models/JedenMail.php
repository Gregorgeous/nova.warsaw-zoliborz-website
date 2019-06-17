<?php namespace ScoutsWarsawZoliborz\ListaMailingowaRozkazy\Models;

use Model;

/**
 * Model
 */
class JedenMail extends Model
{
    use \October\Rain\Database\Traits\Validation;
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'scoutswarsawzoliborz_listamailingowarozkazy_listamaili';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
