import * as $ from 'jquery';
import config from './config';

export function toogleMenuScript() {
$(document).ready(function() {
$('#sidebarCollapse').on('click', function() {
$('#sidebar').toggleClass('active');
$("#wrapper").toggleClass("toggled");
$('.hamburguer').toggleClass('active');
});
});
}

export function getCookie() {
let cookie = undefined;
if (localStorage.getItem(config.cookie.COOKIE_NAME)) {
cookie = JSON.parse(localStorage.getItem(config.cookie.COOKIE_NAME));
}
if (sessionStorage.getItem(config.cookie.COOKIE_NAME)) {
cookie = JSON.parse(sessionStorage.getItem(config.cookie.COOKIE_NAME));
}
return cookie;
}

export function removeCookie() {
localStorage.removeItem(config.cookie.COOKIE_NAME);
sessionStorage.removeItem(config.cookie.COOKIE_NAME);
}


export function enableInput(input) {
$(`#${input}`)
.toggleClass('class_disabled')

$('.class_disabled').attr('disabled', '');
}


export function displayInput(input) {
$(`#${input}`)
.toggleClass('d-none')
}

export function openModalValidation() {
$(document).ready(function() {
window.$('#Modal').modal('toggle');
window.$('#Modal').modal('show');
});
}