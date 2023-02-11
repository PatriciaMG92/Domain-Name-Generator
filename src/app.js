/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const pronouns = ["the", "our"];
const adjectives = ["great", "big", "super"];
const nouns = ["jogger", "racoon", "coders"];
const extensions = [".com", ".es", ".net"];
const btn = document.getElementById("createDomainNames");

btn.addEventListener("click", getDomainNames);

function getDomainNames() {
  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          let div = document.createElement("div");
          div.innerText =
            pronouns[i] + adjectives[j] + nouns[k] + extensions[l];
          document.body.appendChild(div);
        }
      }
    }
  }
}
