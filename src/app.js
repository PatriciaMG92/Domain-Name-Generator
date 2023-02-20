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

const pronouns = [];
const adjectives = [];
const nouns = [];
const extensions = [".com", ".es", ".net"];

const result = [];

const btn = document.getElementById("createDomainNames");
const div = document.getElementById("domains");
btn.addEventListener("click", all);

const getValue = idInput => {
  return document.getElementById(idInput).value;
};

const getPronouns = () => {
  if (getValue("pronoun1") === "" || getValue("pronoun2") === 0) {
    alert("Please, fill all the fields");
  } else {
    const pronounOne = getValue("pronoun1");
    const pronounTwo = getValue("pronoun2");
    pronouns.push(pronounOne, pronounTwo);
    console.log(pronouns);
  }
};

const getAdjectives = () => {
  if (getValue("adjective1") === "" || getValue("adjective2") === 0) {
    alert("Please, fill all the fields");
  } else {
    const adjectiveOne = getValue("adjective1");
    const adjectiveTwo = getValue("adjective2");
    adjectives.push(adjectiveOne, adjectiveTwo);
    console.log(adjectives);
  }
};

const getNouns = () => {
  if (getValue("name1") === "" || getValue("name2") === 0) {
    alert("Please, fill all the fields");
  } else {
    const nameOne = getValue("name1");
    const nameTwo = getValue("name2");
    nouns.push(nameOne, nameTwo);
    console.log(nouns);
  }
};

const setDomainNames = () => {
  getPronouns();
  getAdjectives();
  getNouns();

  const generateDomainNames = pronouns.map(valueOfPronoun => {
    adjectives.map(valueofAdjective => {
      nouns.map(valueOfNoun => {
        extensions.map(valueOfExtension => {
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
};

function all() {
  setDomainNames();
}
