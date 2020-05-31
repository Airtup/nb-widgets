<?php

namespace App\Libraries\Factory;
use App\Libraries\Dao\NationDao;

class FactoryDAO
{
	public  function getDAO($dao)
	{
		if($dao=='NationDao')
		{
			return new NationDao();
		}
		else
		{
			\abort(500,'Undefined DAO');
		}

	}
    
}