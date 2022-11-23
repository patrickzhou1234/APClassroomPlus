// ==UserScript==
// @name         AP Classroom Answers Hider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://apclassroom.collegeboard.org/*/performance/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=collegeboard.org
// @grant        none
// ==/UserScript==

window.onkeydown = function(event) {
    if (event.keyCode=="192") {
        var x = document.querySelectorAll("div.LearnosityDistractor.--valid")
        for (var i=0;i<x.length;i++) {
            x[i].remove();
        }
        x=document.querySelectorAll("div.icon.--correct");
        for (i=0;i<x.length;i++) {
            x[i].remove();
        }
        var g=document.querySelectorAll(".mcq-option");
        for (i=0;i<g.length;i++) {
            if (g[i].classList.contains("--correct")) {
                g[i].classList.remove("--correct");
            }
        }
        g=document.querySelectorAll(".--chosen");
        for (i=0;i<g.length;i++) {
            g[i].classList.remove("--chosen");
        }
    }
}
