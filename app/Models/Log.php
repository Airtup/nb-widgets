<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{

    protected $table = "logs";
    protected $fillable=['description','nation_id','user_id'];

    public function nation()
    {
        return $this
            ->belongsTo('App\Models\Nation');
    }
}
