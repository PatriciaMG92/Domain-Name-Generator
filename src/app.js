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

const pronouns = [];
const adjectives = [];
const nouns = [];
const extensions = [".com", ".es", ".net"];

const result = [];

const btn = document.getElementById("createDomainNames");
const div = document.getElementById("domains");
btn.addEventListener("click", all);

function getPronouns() {
  const pronounOne = document.getElementById("pronoun1").value;
  const pronounTwo = document.getElementById("pronoun2").value;
  pronouns.push(pronounOne, pronounTwo);
  console.log(pronouns);
}

function getAdjectives() {
  const adjectiveOne = document.getElementById("adjective1").value;
  const adjectiveTwo = document.getElementById("adjective2").value;
  adjectives.push(adjectiveOne, adjectiveTwo);
  console.log(adjectives);
}

function getNouns() {
  const nameOne = document.getElementById("name1").value;
  const nameTwo = document.getElementById("name2").value;
  nouns.push(nameOne, nameTwo);
  console.log(nouns);
}
function setDomainNames() {
  getPronouns();
  getAdjectives();
  getNouns();
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
function all() {
  setDomainNames();
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
