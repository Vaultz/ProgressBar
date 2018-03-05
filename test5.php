<?php
session_start();

if (!empty($_SESSION['bars'])) {
  $next = array_shift($_SESSION['bars']).'.php';
}
else {
  $next = 'end.php';
}
$_SESSION['nb_tests']++;
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>ProgressBar Tests</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="css/style.css"  media="screen,projection"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
  <body>
    <nav>
      <div class="nav-wrapper blue">
        <a href="#" class="brand-logo">ProgressBar Tests - Test <?php echo $_SESSION['nb_tests']; ?>/11</a>

      </div>
    </nav>

    <section class="container mainsection">
      <div class="progress progress5">
        <div class="determinate pb_5" style="width: 0%"></div>
      </div>
      <div class="buttonbox">
        <a class="waves-effect waves-light btn blue startbuttons startest5">Start</a>
        <a href="test5.php" class="waves-effect waves-light btn disabled stopbuttons stoptest5">Stop</a>
        <a href="<?php echo $next ?>" class="waves-effect waves-light btn green">Next</a>
      </div>

    </section>

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/materialize.min.js"></script>
    <script type="text/javascript" src="js/scripts.js"></script>
  </body>
</html>
