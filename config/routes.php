<?php

/**
*
* Definição das rotas e seus respectivos controllers e actions
*
* 
*
**/

// rotas normais
$commonRoutes = array(
	'/'               => 'HomeController/home',
);

// rotas POST
$commonPost = array();

$commonRoutes = array_merge($commonRoutes, $commonPost);

return $commonRoutes;