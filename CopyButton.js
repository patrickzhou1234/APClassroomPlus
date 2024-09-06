// ==UserScript==
// @name         AP Classroom Copy Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Patrick Zhou
// @match        https://apclassroom.collegeboard.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=collegeboard.org
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11.6.16/dist/sweetalert2.all.min.js
// @grant        GM_addStyle
// ==/UserScript==

setInterval(() => {
    document.querySelectorAll(".stem_paragraph").forEach((el) => {
        if (!el.parentElement.textContent.includes("Copy")) {
            btn = document.createElement("button");
            btn.textContent = "Copy";
            el.parentElement.appendChild(btn);
            btn.onclick = () => {
                navigator.clipboard.writeText(el.textContent);
                Swal.fire("Copied!", "", "success");
            };
        }
    });
}, 500);
