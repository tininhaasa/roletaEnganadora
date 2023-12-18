<?php

/**
*
* Controller do site.
*
* 
*
**/
class HomeController extends Controller
{

	//home header
	public function home()
	{		

		$this->setLayout(
			'site/shared/layout.php',
			'Página home',
			array(
				'assets/css/style.css'
			),
			array(
				'assets/js/site/home.js'
			)
		);
		$this->view('site/home/index.php');

	}


}