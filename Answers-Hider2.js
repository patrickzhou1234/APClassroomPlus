// ==UserScript==
// @name         AP Classroom Answers Hider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://apclassroom.collegeboard.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=collegeboard.org
// @grant        none
// ==/UserScript==

window.onkeydown = function(event) {
    if (event.keyCode=="192") {
        document.querySelectorAll("div.LearnosityDistractor.--valid").forEach(el => el.remove());
        document.querySelectorAll("div.icon.--correct").forEach(el => el.remove());
        document.querySelectorAll("div.AccessibilityWrapper.mcq-option.--correct").forEach(el => el.classList.remove("--correct"));
        document.querySelectorAll("div.letter.--chosen").forEach(el => el.classList.remove("--chosen"));
    }
}
