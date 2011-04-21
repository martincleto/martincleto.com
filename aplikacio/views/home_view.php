<!DOCTYPE html>
<html lang="<?php print $current_lang; ?>">
<head>
	<title><?php print $title; ?></title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="description" content="<?php print $description; ?>" />
	<meta name="keywords" content="<?php print $keywords; ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" href="/favicon.ico">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png">
	<link rel="stylesheet" href="/static/css/styles.css">
	<script src="/static/js/lib/modernizr-1.7.min.js"></script>
</head>
<body>
	
	<header>
		<div class="inner-wrap">
			<h1><?php print $title; ?></h1>
			<h2>Santiago Martín-Cleto</h2>
		</div>
	</header>
	<section id="content">
		<div id="content-top">
			<?php print lang('claim'); ?>
			<nav>
				<a href="/about">More about me</a>
			</nav>
		</div>
		<div id="gallery">
			<span id="gallery-prev" class="gallery-handler inactive"></span>
			<ul>
				<?php foreach($items as $item): ?>
				<li>
					<?php
						//print_r($item);
						print anchor('http://' . $item->url,$item->title);
					?>
				</li>
				<?php endforeach; ?>
			</ul>
			<span id="gallery-next" class="gallery-handler"></span>
		</div>
	</section>
	<footer>
		<p>Lang: <?php print $current_lang; ?></p>
		<p><br />Page rendered in {elapsed_time} seconds</p>
	</footer>
	
	<script src="/static/js/lib/jquery-1.5.2.min.js"></script>
	<script src="/static/js/scripts.js"></script>

</body>
</html>