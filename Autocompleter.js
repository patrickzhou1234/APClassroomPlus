// ==UserScript==
// @name         AP Classroom Autocompleter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Patrick Zhou
// @match        https://apclassroom.collegeboard.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=collegeboard.org
// @grant        none
// ==/UserScript==

window.onkeydown = function (event) {
    if (event.keyCode == "220") {
        body = JSON.parse(prompt("Enter the questions JSON here:"));
        x = 0;
        btnint = setInterval(() => {
            if (body.data.apiActivity.items[x].questions[0].options[0].value == "i0") {
                if (body.data.apiActivity.items[x].questions[0].validation.valid_response.value[0] == "i0") {
                    document.querySelectorAll(".lrn_mcqgroup")[x].childNodes[0].childNodes[0].click();
                }
                if (body.data.apiActivity.items[x].questions[0].validation.valid_response.value[0] == "i1") {
                    document.querySelectorAll(".lrn_mcqgroup")[x].childNodes[1].childNodes[0].click();
                }
                if (body.data.apiActivity.items[x].questions[0].validation.valid_response.value[0] == "i2") {
                    document.querySelectorAll(".lrn_mcqgroup")[x].childNodes[2].childNodes[0].click();
                }
                if (body.data.apiActivity.items[x].questions[0].validation.valid_response.value[0] == "i3") {
                    document.querySelectorAll(".lrn_mcqgroup")[x].childNodes[3].childNodes[0].click();
                }
                if (body.data.apiActivity.items[x].questions[0].validation.valid_response.value[0] == "i4") {
                    document.querySelectorAll(".lrn_mcqgroup")[x].childNodes[4].childNodes[0].click();
                }
            } else {
                if (body.data.apiActivity.items[x].questions[0].validation.valid_response.value[0] == "i1") {
                    document.querySelectorAll(".lrn_mcqgroup")[x].childNodes[0].childNodes[0].click();
                }
                if (body.data.apiActivity.items[x].questions[0].validation.valid_response.value[0] == "i2") {
                    document.querySelectorAll(".lrn_mcqgroup")[x].childNodes[1].childNodes[0].click();
                }
                if (body.data.apiActivity.items[x].questions[0].validation.valid_response.value[0] == "i3") {
                    document.querySelectorAll(".lrn_mcqgroup")[x].childNodes[2].childNodes[0].click();
                }
                if (body.data.apiActivity.items[x].questions[0].validation.valid_response.value[0] == "i4") {
                    document.querySelectorAll(".lrn_mcqgroup")[x].childNodes[3].childNodes[0].click();
                }
            }
            x++;
            if (x == body.data.apiActivity.items.length) {
                clearInterval(btnint);
            }
        }, 500);
    }
};
