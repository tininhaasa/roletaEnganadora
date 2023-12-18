<?php

/**
*
* Controller do erro 404 (Página não encontrada).
*
* 
*
**/
class Error404 extends Controller
{

	public function index()
	{

		$this->setLayout('site/home/index.php');
		$this->view('error/error404.php');

	}

}