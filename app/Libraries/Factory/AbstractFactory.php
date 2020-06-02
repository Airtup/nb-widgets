<?php
namespace App\Libraries\Factory;
use App\Libraries\Factory\FactoryDao;

class AbstractFactory
{
	public static function getFactory($factory)
	{
		if($factory=='DAO')
		{
			return new FactoryDao();
		}
		else if($factory=='Api'){
			return new FactoryNationApi();
		}
		else
		{
			\abort(500,'Undefined Factory');
		}
	}
}