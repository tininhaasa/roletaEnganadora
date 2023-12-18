<?php
$url      = $this->helpers['URLHelper']->getURL();
$location = $this->helpers['URLHelper']->getLocation();
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<meta name="author" content="">
	<title><?php $this->helpers['URLHelper']->getTitle(); ?></title>

	<link rel="stylesheet" href="<?= $url ?>/assets/libs/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="<?= $url ?>/assets/css/progress.css">
	<link rel="stylesheet" href="<?= $url ?>/assets/css/font.css">
	<link rel="stylesheet" href="<?= $url ?>/assets/css/style.css">
	<link rel="stylesheet" href="<?= $url ?>/assets/css/roullet.css">

	<!-- Styles -->

</head>

<body>
	<header>
		<nav id="menu-bar" >
			
		<div class="menu">
        <img src="<?= $url ?>/assets/img/logo-lendas.svg" id="img-logo">
      </div>
		</nav>

	</header>

	<main>

		<input type="number" hidden value="<?= (!isset($part) || $part == '1') ? 1 : $part ?>" name="page" id="page">
		<?php require $file; ?>
	</main>

	<div id="people" class="people slide-animation">
      <img src="<?= $url?>/assets/img/homens/man7.jpg" id="people-img" alt="">
      <p style="text-align: center; font-family: Arial, Helvetica, sans-serif;" id="people-p">Wellington Martins acabou de ganhar R$150</p>
    </div>
	<script type="text/javascript">
		var PATH = "<?php echo $url; ?>";
		var Helpers = {};
	</script>
	
<script src="https://cdn.jsdelivr.net/npm/notiflix@2.6.0/dist/notiflix-aio-2.6.0.min.js"></script>

	<script src="<?= $url ?>/assets/libs/jquery/jquery-3.4.1.min.js"></script>
	<script src="<?= $url ?>/assets/libs/velocity-animate/velocity.min.js"></script>
	<script src="<?= $url ?>/assets/libs/sweetalert2/dist/sweetalert2.all.min.js"></script>
	<script src="<?= $url ?>/assets/libs/underscore/underscore-umd-min.js"></script>
	<script src="<?= $url ?>/assets/libs/backbone/backbone-min.js"></script>
	<script src="<?= $url ?>/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
	<script src="<?= $url ?>/assets/js/site/roullet.js"></script>
	<script src="<?= $url ?>/assets/js/site/frases.js"></script>
	<!-- Scripts -->

	<?php $this->helpers['URLHelper']->getScripts(); ?>

</body>

</html>