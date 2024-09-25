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
            btn.setAttribute("class","font-normal font-content cursor-pointer rounded-20 px-4.2 py-2.8 h-12 whitespace-nowrap bg-bluebook-blue focus:outline-none text-white border-[1px] border-bluebook-blue transition-shadow duration-[250ms] ease-in-out hover:border-bluebook-dark-blue focus:shadow-[0_0_0_2px] focus:shadow-bluebook-blue focus:underline focus:border-white h-[40px] w-[78px] !font-bold text-[14px] ml-[12px] inline-flex items-center justify-center");
            el.parentElement.appendChild(btn);
            btn.onclick = () => {
                navigator.clipboard.writeText(el.textContent);
                Swal.fire("Copied!", "", "success");
            };
        }
    });
    document.querySelectorAll(".passage").forEach((el) => {
        if (!el.parentElement.textContent.includes("Copy")) {
            btn = document.createElement("button");
            btn.textContent = "Copy";
            btn.setAttribute("class","font-normal font-content cursor-pointer rounded-20 px-4.2 py-2.8 h-12 whitespace-nowrap bg-bluebook-blue focus:outline-none text-white border-[1px] border-bluebook-blue transition-shadow duration-[250ms] ease-in-out hover:border-bluebook-dark-blue focus:shadow-[0_0_0_2px] focus:shadow-bluebook-blue focus:underline focus:border-white h-[40px] w-[78px] !font-bold text-[14px] ml-[12px] inline-flex items-center justify-center");
            el.parentElement.appendChild(btn);
            btn.onclick = () => {
                navigator.clipboard.writeText(el.textContent);
                Swal.fire("Copied!", "", "success");
            };
        }
    });
}, 500);
