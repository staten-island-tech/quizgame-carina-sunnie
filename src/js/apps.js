import { questions } from "./questions.js";

//id from html to java
const startButton = document.getElementById("start-button");
const questionContent = document.getElementById("question");
const NextButton = document.getElementById("next-button");
const questionContainer = document.querySelector(".q-container");
const answerChoices = document.getElementById("answerchoices-box");

startButton.addEventListener("click", startGame);

let shuffledQuestions, currentQuestionsIndex;

NextButton.addEventListener("click", () => {
  currentQuestionsIndex++;
  setNextQuestion();
});

//here put shtuff to start the quiz and the function
let countCorrectAnswers = 0;

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  //sorts questions randomly, Math.random gives # between 1 & 0, subtracting 0.5 will make it randomized
  currentQuestionsIndex = 0;
  questionContainer.classList.remove("hide");
  setNextQuestion();
  countCorrectAnswers = 0;
}
function showQuestions(question) {
  questionContent.innerText = question.Question; //displays question text
  //loop:
  question.Answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("button");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    } // add data attribute to btn element, only correct answer is accounted for (?)
    button.addEventListener("click", selectAnswer);
    answerChoices.appendChild(button);
  });
}

function setNextQuestion() {
  resetState();
  showQuestions(shuffledQuestions[currentQuestionsIndex]);
}

function resetState() {
  //clearStatusClass(document.body) ??//
  NextButton.classList.add("hide");
  while (answerChoices.firstChild) {
    answerChoices.removeChild(answerChoices.firstChild);
    //hides previous answers + sets new answers & questions instead. loops through children for answerchoice button elements
  }
}

function selectAnswer(e) {
  const selectedButton = e.target; //button that's clicked
  const correct = selectedButton.dataset.correct; //check dataset for if selected button is correct
  setStatusClass(document.body, correct); //takes whether or not the body is set to correct or wrong
  Array.from(answerChoices.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  }); //loop thru buttons
  if (correct) {
    countCorrectAnswers++;
  }
  if (shuffledQuestions.length > currentQuestionsIndex + 1) {
    NextButton.classList.remove("hide"); //checks for remaining questions or lack thereof
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
    document.getElementById("correct-answers").innerHTML =
      countCorrectAnswers + "/" + shuffledQuestions.length; //shows score in html
    startButton.classList.remove("hide");
    if (countCorrectAnswers >= 4) {
      alert("well done!.. a little suspicious, but sure!");
    } else {
      alert("whomp whomp, not great :(");
    }
    if (countCorrectAnswers === 0 || countCorrectAnswers === 1) {
      alert(" I expected nothing and yet I'm still disappointed.");
    }
    if (countCorrectAnswers === 2 || countCorrectAnswers === 3) {
      alert(" this score belongs to someone who just randomly clicked");
    }
    if (countCorrectAnswers === 4 || countCorrectAnswers === 5) {
      alert(" well done, young one (or old one if you're old)");
    }
    if (countCorrectAnswers === 6 || countCorrectAnswers === 7) {
      alert(" ...did you google the answers");
    }
    if (countCorrectAnswers === shuffledQuestions.length) {
      alert(" mark me impressed but you definately cheated");
    }
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
} //sets status based on if the answer was the correct answer

function clearStatusClass(element) {
  element.classList.remove("wrong");
  element.classList.remove("correct");
} //clear the status class by removing them

// for (const i = 0; i < questions.length; i) {
//   let response = window.question(questions[i].question); //i is like the question number . also wanted triple euqual signed cause i dont trust it but it didnt work :(
//   if (response === questions[i].answer) {
//     score++;
//     alert("Correct!... how did you know that? kinda sussspicious ngl");
//   } else {
//     ("WRONG!!! womp womp... wooooomp");
//   }
// } //ITS A BIG OL LOOP. BREAKS WHEN YOU THE NUMBER OF QUESTIONS ARE ANSWERED
