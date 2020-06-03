<?php

namespace App\Libraries\Factory;
use App\Libraries\Dao\NationDao;
use App\Libraries\Dao\NationDetailsDao;
use App\Libraries\Dao\NationPagesDao;
use App\Libraries\Dao\PeopleDao;

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
		if($dao=='NationPagesDao')
		{
			return new NationPagesDao();
		}
		if($dao=='PeopleDao')
		{
			return new PeopleDao();
		}
		else
		{
			\abort(500,'Undefined DAO');
		}

	}
    
}