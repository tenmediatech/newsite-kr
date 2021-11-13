var $visionTitle = $('.v-one');
var $vision = $('.v-two');
var $wheel = $('.noticias-wheel')

$vision.waypoint(function () {
    $visionTitle.addClass('animated fadeInDown v-post');
    $vision.addClass('animated fadeInDown v-post');
}, { offset: '80%' });

$wheel.waypoint(function () {
    $wheel.addClass('animated fadeInRight v-post')
}, { offset: '80%' });