// ==UserScript==
// @name         AP Classroom Answers Hider+Autocompleter
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
}
