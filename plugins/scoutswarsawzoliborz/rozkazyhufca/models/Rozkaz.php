<?php namespace ScoutsWarsawZoliborz\RozkazyHufca\Models;

use Model;

/**
 * Model
 */
class Rozkaz extends Model
{
    use \October\Rain\Database\Traits\Validation;
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'scoutswarsawzoliborz_rozkazyhufca_rozkazy';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
