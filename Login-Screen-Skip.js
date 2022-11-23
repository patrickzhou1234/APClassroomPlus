// ==UserScript==
// @name         AP Classroom to login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://apstudents.collegeboard.org/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=collegeboard.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByClassName("OHYx4pfmhf0MrQbqKGyX1")[0].click();
})();

window.onkeydown = function(event) {
   if (event.keyCode=="39") {
       document.querySelectorAll(".rounded-20")[4].click();
   }
}
