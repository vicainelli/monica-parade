<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Locais</title>
</head>
<body>
	
<?php
    $monicas = simplexml_load_file('locais.xml');
    echo $monicas->monica[0]->artista;
?>

</body>
</html>