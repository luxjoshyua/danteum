import style from "./sass/index.scss";
import $ from "jquery";

// import "./js/slideshow";
import "./js/spring-collection";
import "./js/stamps";
// import "./js/progress-bar";
// import "./js/content-fade";
import "./js/parallax-shapes";
import "./js/pixels-scrolled";



// MENU TOGGLE
$('.menu-toggle').on('click', function () {
  $('.menu').toggleClass('open')
  return false
})
