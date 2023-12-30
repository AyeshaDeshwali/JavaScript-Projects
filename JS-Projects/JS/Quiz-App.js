const quizData = [
  {
    que: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    que: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    que: "What does API stand for?",
    a: "Application Programming Interface",
    b: "Advanced Programming Interface",
    c: "Automated Programming Interface",
    d: "Application Protocol Interface",
    correct: "a",
  },
  {
    que: "What is the result of the expression '3 + '3' in JavaScript?",
    a: "6",
    b: "'33'",
    c: "33",
    d: "Error",
    correct: "b",
  },
  {
    que: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
  {
    que: "What is the purpose of the 'typeof' operator in JavaScript?",
    a: "To check the type of a variable",
    b: "To create a new variable",
    c: "To concatenate strings",
    d: "To define a function",
    correct: "a",
  },

  {
    que: "What does the 'JSON' acronym stand for in JavaScript?",
    a: "JavaScript Object Notation",
    b: "Java Source Online",
    c: "Joint Style of Naming",
    d: "Journey of Navigating",
    correct: "a",
  },
  {
    que: "Which method is used to remove the last element from an array in JavaScript?",
    a: "pop()",
    b: "remove()",
    c: "delete()",
    d: "shift()",
    correct: "a",
  },
  {
    que: "What is the purpose of 'use strict' in JavaScript?",
    a: "To enable strict mode",
    b: "To define a new variable",
    c: "To create an alert",
    d: "To include external libraries",
    correct: "a",
  },
];
let index = 0;
let total = quizData.length;
let right = 0;
let wrong = 0;
const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll(".option");
const loadQuestion = () => {
  if (index === total) {
    return end();
  }
  reset();
  const data = quizData[index];
  queBox.innerText = `${index + 1}. ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};
const submitQuiz = () => {
  const data = quizData[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};
const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};
function reset() {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
}
function end() {
  document.getElementById("box").innerHTML = `
            <div style="text-align:center">
                <h1> Thank you  for playing the quiz</h3>
                <h2>${right} / ${total} are correct</h2>
            </div>`;
}
const restartQuiz = () => {
  index = 0;
  right = 0;
  wrong = 0;
  loadQuestion();
};

loadQuestion();

// setTimeout(() => { end() }, 20000);
