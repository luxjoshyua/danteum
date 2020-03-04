import style from "./sass/index.scss";
import $ from "jquery";
import "./js/elements-move";




// MENU TOGGLE
$('.menu-toggle').on('click', function () {
  $('.menu').toggleClass('open')
  return false
})
