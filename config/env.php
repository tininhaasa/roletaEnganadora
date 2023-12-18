<?php

/**
*
* Definição do ambiente (local ou online)
*
* 
*
**/

/**
*
* Verificação do ambiente atual
*
**/
$env = 'prod';

if(!empty($_SERVER['SERVER_NAME']) and $_SERVER['SERVER_NAME'] === 'localhost'  or $_SERVER['SERVER_NAME'] === '192.168.100.87'){
  $env = 'dev';
}

/**
*
* Controle do erro reporting de acordo com o ambiente.
*
**/
$error = true;

if($env == 'prod'){
	$error = false;
}

error_reporting($error);