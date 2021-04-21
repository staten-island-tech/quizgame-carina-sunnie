import { questions } from "./questions";

//id from html to java
const ansA = document.getElementById("a");
const ansB = document.getElementById("b");
const ansC = document.getElementById("c");
const question = document.getElementById("question");
const NextButton = document.getElementById("next-btn");
// Let score

let score = 0;

// //array
// Question: string
// Answers: possible-array of objects or strings
// Ex (string)
// [“ciao”, “Nihao”, “Hola”]

// CorrectAnswer:”hola”
//  Ex (object)
// {answeChoice “caio”, correct: false} caio and false is a property. If it’s a buzzfeed style quiz with different values then you’d also have value:integer

let quizContainer = document.getElementbyId("quiz");
let resultsContainer = document.getElementbyId("results");
let submitButton = document.getElementbyId("submit");
//here put shtuff to start the quiz and the function shamarbledarngledingdong
function showQuestions(allQuestions, quizContainer) {
  //thanks google my good frienderino/butigetit
  //then output display questions herrree and like,,, according to whalen,,,
  // Display question one.
  // Listen for user input event.
  // Check if correct.
  // If correct display correct modal (popup) or check, update score
  // Else display false modal or x, Update score.
  // (Checking index of q) if question number is less than questions.length display next question
  // else show user score display score modal/ end modal or something LATER OK*****
}

// //etc. or have choices then have correctAnswer at the end. put values inthere maybe

// // //
// // //Event to Start game ? Click start button or on page load (listening to an event)
// // Display quiz question or questions
// // For questions for each iterate to display Or
// // Display question one.
// // Listen for user input event.
// // Check if correct.
// // If correct display correct modal (popup) or check, update score
// // Else display false modal or x, Update score.
// // (Checking index of q) if question number is less than questions.length display next question
// // else show user score display score modal/ end modal or something
