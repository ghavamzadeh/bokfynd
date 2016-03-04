$(document).ready(function() {
$('body').addClass('menu');

var $menu = $('#menu'),$menulink = $('.activate');
  
$menulink.click(function() {
	$menulink.toggleClass('active');
	$menu.toggleClass('active');
	return false;
	});
});