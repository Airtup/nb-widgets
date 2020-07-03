<?php

namespace App\Console\Commands;

use App\Models\Sender;
use Illuminate\Console\Command;

use App\Libraries\Factory\AbstractFactory;
use App\Models\Nation;
use App\Models\Log;
use App\Models\People;

class CheckAllTime extends Command
{

    private $factory;
    private $api;
    private $dao;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:time';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check in midnight the nation updates to specific tag';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        ini_set('max_execution_time', 1000);

        parent::__construct();


        $this->factory = AbstractFactory::getFactory('Api');
        $this->api = $this->factory->getDAO('NationApiConexion');
        $this->dao = AbstractFactory::getFactory('DAO')->getDAO('NationDao');
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $nations = Nation::where('status','=',1)->get();

        foreach($nations as $nation){
            $nation_id = $nation->id;

            if(!$exist = Sender::where('nation_id','=',$nation_id)->where('execute','=',0)->first()){
                $sender = new Sender();
                $sender->nation_id      = $nation_id;
                $sender->user_id        = 1;
                $sender->manual         = 0;
                $sender->execute        = 0;
                $sender->current        = 0;
                $sender->page           = 0;
                $sender->tag            = $nation->nation_details->tag;
                $sender->slug           = $nation->slug;
                $sender->access_token   = $nation->access_token;
                $sender->save();
            }
        }


    }
}
