/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Given a user in a main page
//WHEN clicks in a button
//THEN generates random domain names from a list of pronouns, adjectives and nouns

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

//usar for.each y .map juntos??

const pronouns = ["the", "our"];
const adjectives = ["great", "big", "super"];
const nouns = ["jogger", "panda", "racoon"];
const extensions = [".com", ".es", ".net"];

const result = [];

const btn = document.getElementById("createDomainNames");
const div = document.getElementById("domains");
btn.addEventListener("click", setDomainNames);

function setDomainNames() {
  const generateDomainNames = pronouns.map(function(valueOfPronoun) {
    adjectives.map(function(valueofAdjective) {
      nouns.map(function(valueOfNoun) {
        extensions.map(function(valueOfExtension) {
          const newResult = [
            ...result,
            valueOfPronoun + valueofAdjective + valueOfNoun + valueOfExtension
          ];
          let divOne = document.createElement("div");
          divOne.innerText = newResult;
          div.appendChild(divOne);
        });
      });
    });
  });
}

// function getDomainNames() {
//   for (let i = 0; i < pronouns.length; i++) {
//     for (let j = 0; j < adjectives.length; j++) {
//       for (let k = 0; k < nouns.length; k++) {
//         for (let l = 0; l < extensions.length; l++) {
//           let divOne = document.createElement("div");
//           divOne.innerText =
//             pronouns[i] + adjectives[j] + nouns[k] + extensions[l];
//           div.appendChild(divOne);
//         }
//       }
//     }
//   }
// }
