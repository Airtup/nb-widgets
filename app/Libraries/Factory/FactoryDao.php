<?php

namespace App\Libraries\Factory;
use App\Libraries\Dao\NationDao;
use App\Libraries\Dao\NationDetailsDao;

class FactoryDAO
{
	public  function getDAO($dao)
	{
		if($dao=='NationDao')
		{
			return new NationDao();
		}
		if($dao=='NationDetailsDao')
		{
			return new NationDetailsDao();
		}
		else
		{
			\abort(500,'Undefined DAO');
		}

	}
    
}