var $rightQuote = $('.right-quote');
var $missionStatement = $('.mission-statement');
var $importance = $('#importance');
var $impOne = $('.imp-one');
var $impTwo = $('.imp-two');
var $impThree = $('.imp-three');

$rightQuote.waypoint(function () {
    $rightQuote.addClass('animated fadeInRight v-post');
}, { offset: '80%' });

$missionStatement.waypoint(function () {
    $missionStatement.addClass('animated fadeInLeft v-post');
}, { offset: '80%' });

$importance.waypoint(function () {
    $impOne.addClass('animated fadeInUp v-post');
    $impTwo.addClass('animated fadeInUp v-post');
    $impThree.addClass('animated fadeInUp v-post');
}, { offset: '80%' });
