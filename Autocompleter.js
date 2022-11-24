// ==UserScript==
// @name         AP CLASSROOM Autocompleter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://apclassroom.collegeboard.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=collegeboard.org
// @grant        none
// ==/UserScript==

window.onkeydown = function(event) {
     if (event.keyCode == "65") {
         var answer="private int numerator;private int denominator;private double fractionToDecimal(){return (double) numerator / denominator;}";
         var cusid_ele = document.getElementsByClassName('code_line');
         var str="";
         for (var i = 0; i < cusid_ele.length; ++i) {
             var item = cusid_ele[i];
             str+=item.innerText;
         }
         for (i=0;i<str.length;i++) {
             if (str[i]==' ') {
                 str[i]='+';
             }
         }
         var btn = document.getElementsByClassName("lrn-label");
         for (i=0;i<btn.length;i++) {
             if (btn[i].textContent==answer) {
                 btn[i].click();
             }
         }
     }
}
