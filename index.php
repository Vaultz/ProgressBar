<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();

$_SESSION['bars'] = [
  'test1','test1',
  'test2','test2',
  'test3','test3',
  'test4','test4',
  'test5','test5',
];
$_SESSION['nb_tests']=0;

shuffle($_SESSION['bars']);
shuffle($_SESSION['bars']);
shuffle($_SESSION['bars']);

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
        <a href="#" class="brand-logo">ProgressBar Tests</a>
        <!-- <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul> -->
      </div>
    </nav>
    <section class="card-panel blue lighten-4" style="width:70%; margin:1%;">
      <h3>Bienvenue sur cette interface de test !</h3>
      <ul>
        <li>
          <h5>Le bouton <a class="waves-effect waves-light btn blue startest">Start</a> lance le chargement.</h5>
        </li>
        <li>
          <h5>Le bouton <a class="waves-effect waves-light btn red stopbuttons">Stop</a> interromp le chargement.</h5>
        </li>
        <li>
          <h5>Le bouton <a class="waves-effect waves-light btn green nexttest1">Next</a> vous emmène au test suivant.</h5>
        </li>
      </ul>
      <i>Des questions ? Les observateurs sont là pour ça !</i>
    </section>
    <section class="card-panel blue lighten-4" style="width:70%;margin:1%;">
      <h5>Entraînez-vous avec cette barre test :</h5>
      <div class="progress" style="background-color: #d0d0d0;">
        <div class="determinate pb_3" style="width: 0%"></div>
      </div>
      <div class="buttonbox">
        <a class="waves-effect waves-light btn blue startbuttons startest3">Start</a>
        <a href="index.php" class="waves-effect waves-light btn disabled stopbuttons stoptest3">Stop</a>
        <a href="test1.php" class="waves-effect waves-light btn green">Next</a>
      </div>
    </section>

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/materialize.min.js"></script>
    <script type="text/javascript" src="js/scripts.js"></script>
  </body>
</html>
