import * as $ from 'jquery';

export function toogleMenuScript() {
$(document).ready(function() {
$('#sidebarCollapse').on('click', function() {
$('#sidebar').toggleClass('active');
$("#wrapper").toggleClass("toggled");
$('.hamburguer').toggleClass('active');
});
});
}