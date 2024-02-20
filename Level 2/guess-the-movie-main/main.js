import API from "./src/api.json" assert {type: "json"};

const title = document.querySelector(".li__answer-reveal");
const pictures = document.querySelectorAll("img");
const stdBtn = document.getElementById("standard-btn");
const hardBtn = document.getElementById("hard-btn");
const timerBar = document.querySelector(".timer-bar");

    // Hides section element, reveals ul element and begins animations 
function setAttributes() {
    document.querySelector("section").setAttribute("hidden", "true");
    document.querySelector("ul").setAttribute("data-active", "true");
    timerBar.setAttribute("data-active", "true");
    pictures.forEach(el => {
        el.setAttribute("data-active", "true");
    });
    document.querySelectorAll("h3").forEach(el => {
        el.setAttribute("data-active", "true");
    });
};

    // Maps API to arrays for relevant difficulties
const [keys, values] = [Array.from(Object.keys(API)), Array.from(Object.values(API))];
const [stdKeys, stdValues] = [keys.filter((el, i) => !(values[i].isHard)), values.filter(el => !(el.isHard))];

    // Effectively a do while true loop using css animations as the conditional
function main(k, v) {
    index = Math.floor(Math.random() * k.length);
    title.innerText = k[index];
    r = Math.floor(v[index].images.length / 5);
    l = Math.floor(Math.random() * r);
    seq = [];
    for (let i = 1; i <= 5; i++) {
        seq.push(l);
        l += r;
    };
    for (let i = 0; i < 5; i++) {
        pictures[i].src = v[index].images[seq[i]];
    };
};

    // Establish relevant variables and prime the first sequence
let index = Math.floor(Math.random() * (stdKeys.length));
title.innerText = stdKeys[index];
let r = Math.floor(stdValues[index].images.length / 5);
let l = Math.floor(Math.random() * r);
let seq = [];
for (let i = 1; i <= 5; i++) {
    seq.push(l);
    l += r;
};
for (let i = 0; i < 5; i++) {
    pictures[i].src = stdValues[index].images[seq[i]];
};

    // Updates UI once API has been imported, reveals buttons
document.querySelector(".section__landing-text").textContent = "Select difficulty:";
document.querySelector(".div__button-container").removeAttribute("data-loading");
stdBtn.addEventListener("click", e => {
    e.preventDefault();
    setAttributes();
    timerBar.addEventListener("animationiteration", () => {
        main(stdKeys, stdValues);
    });
});
hardBtn.addEventListener("click", e => {
    e.preventDefault();
    setAttributes();
    timerBar.addEventListener("animationiteration", () => {
        main(keys, values);
    });
});