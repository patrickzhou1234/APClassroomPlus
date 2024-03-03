// ==UserScript==
// @name         AP Classroom Answers Hider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://apstudents.collegeboard.org/*
// @match        https://apclassroom.collegeboard.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=collegeboard.org
// @grant        none
// ==/UserScript==

let showbool=true;

window.onkeydown = function(event) {
    if (event.keyCode=="192") {
        document.querySelectorAll("div.LearnosityDistractor").forEach((el) => {el.style.opacity=0});
        document.querySelectorAll("div.icon.--correct").forEach(el => {
            el.style.display = "none";
            el.parentElement.parentElement.onclick = () => {
                el.style.display = "block";
                el.parentElement.parentElement.classList.add("--correct");
            }
        });
        document.querySelectorAll("div.icon.--incorrect").forEach(el => {
            el.style.display = "none";
            el.parentElement.parentElement.onclick = () => {
                el.style.display = "block";
                el.parentElement.parentElement.classList.add("--incorrect");
            }
        });
        document.querySelectorAll("div.AccessibilityWrapper.mcq-option.--correct").forEach(el => {
            el.classList.remove("--correct");
        });
        document.querySelectorAll("div.AccessibilityWrapper.mcq-option.--incorrect").forEach(el => {
            el.classList.remove("--incorrect");
        });
        document.querySelectorAll("div.letter.--chosen").forEach(el => el.classList.remove("--chosen"));
    }
    if (event.keyCode=="16") {
        if (showbool) {
            document.querySelectorAll("div.LearnosityDistractor").forEach((el) => {el.style.opacity=1});
            showbool=false;
        } else if (!showbool) {
            document.querySelectorAll("div.LearnosityDistractor").forEach((el) => {el.style.opacity=0});
            showbool=true;
        }
    }
}
