// ==UserScript==
// @name         AP Classroom Assignment Text Enlarger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://apstudents.collegeboard.org/*
// @match        https://apclassroom.collegeboard.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=collegeboard.org
// @grant        none
// ==/UserScript==

setInterval(() => {
    document.querySelectorAll(".stimulus_reference").forEach((el)=>{
        el.style.fontSize="20px";
    });
    document.querySelectorAll(".stem_paragraph").forEach((el)=>{
        el.style.fontSize="20px";
    });
    document.querySelectorAll(".lrn-possible-answer").forEach((el)=>{
        el.style.fontSize="20px";
    });
    document.querySelectorAll(".choice_paragraph").forEach((el)=>{
        el.style.fontSize="20px";
    });
    document.querySelectorAll(".lrn_sharedpassage").forEach((el)=>{
        el.style.fontSize="20px";
    });
}, 500);
