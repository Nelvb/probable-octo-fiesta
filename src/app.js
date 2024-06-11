/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = [
    "jogger",
    "merchant",
    "dog",
    "comedian",
    "two headed pinecone"
  ];
  let action = [
    "took my",
    "threw my",
    "burned my",
    "kicked my",
    "yelled at my"
  ];
  let possetion = ["car", "computer", "sandwich"];
  let where = [
    "on the street",
    "near the toilet",
    "in front of the office",
    "in my house"
  ];

  let pronIndx = Math.floor(Math.random() * pronoun.length);
  let subIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let possIndx = Math.floor(Math.random() * possetion.length);
  let wherIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronIndx] +
    " " +
    subject[subIndx] +
    " " +
    action[actIndx] +
    " " +
    possetion[possIndx] +
    " " +
    where[wherIndx]
  );
};
document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
});
