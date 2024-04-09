const quizData = [
  {
    question: "Question 1: Equality Smackdown!The Indian Constitution guarantees women are treated just as fairly as men. Which articles give women this super power?",
    options: ["Articles of Style (we wish!)","Articles 14 & 15 (Equality Champs!)","Articles on Tea Breaks (because everyone deserves a break!)","Articles of Friendship (girl power!)"],
    answer: "Articles 14 & 15 (Equality Champs!)"
  },
  {
    question: "Question 2: Job Interview Woes? Don't Sweat It!Can a government job interview tell you 'no'just because you're a woman? ",
    options: ["Girl, Boss Up! That's illegal (thanks, Articles 14 & 16!)", "Maybe, interview skills matter more."],
    answer: "Girl, Boss Up! That's illegal (thanks, Articles 14 & 16!)"
  },
  {
      question: "Question 3: Say NO to Workplace Harassment! Which superhero act protects women from being treated unfairly at work, like unwanted comments or advances?",
      options: ["The Snack Time Protection Act (everyone deserves peace during lunch!)","The Sexual Harassment of Women at Workplace Act, 2013 (Now that's a shield!)","The Bring Your Pet to Work Act (because fluffy friends can cheer anyone up!)","The Super Speed Act (so you can zoom away from trouble!)"],
      answer: "The Sexual Harassment of Women at Workplace Act, 2013 (Now that's a shield!)"
  },
  {
      question: "Question 4: Local Leader Lady! ‍♀The 73rd and 74th amendments are like magic spells, reserving seats in local bodies for women. This is awesome because:",
      options:["More women = More Girl Power in government!","Double the trouble for bad guys (of course not, but more women making decisions!)","Free makeovers for all female leaders! (Wishful thinking!)","More tea parties in council meetings (not quite!)"],
      answer:"More women = More Girl Power in government!"
  },
  {
    question: "Question 5: Feeling Unsafe at Home? There's Help!The Protection of Women from Domestic Violence Act is your shield against abuse. What number can you call for immediate support?",
    options: ["The National Gossip Hotline (we wish this existed!)","The National Women Helpline - 181","Your BFF's phone number (great to have support, but call the helpline too!)","Ghostbusters! (While they're great, they might not be the answer here!)"],
    answer: "The National Women Helpline - 181"
  },
  {
    question: "Question 6:The National Commission for Women (NCW) works towards:",
    options: ["Women's empowerment and addressing grievances","Women's education and health","Women's entrepreneurship development","All of the above"],
    answer: "Women's empowerment and addressing grievances"
  },
  {
    question: "Question 7:Women who cannot afford a lawyer can get legal aid through::",
    options: [" Right to Education Act, 2009","The Right to Information Act, 2005","The National Food Security Act, 2013","The Legal Services Authorities Act, 1987"],
    answer: "The Legal Services Authorities Act, 1987"
  },
  {
    question: "Question 8:Do women have equal rights in inheritance and property ownership?",
    options: ["yes","No"],
    answer: "yes"
  },
  {
    question: "Question 9:Which amendments promote women's participation in local governance?",
    options: ["42nd and 44th","5th and 6th","73rd and 74th","86th and 89th"],
    answer: "73rd and 74th"
  },
  {
    question: "Question 10:The legal age for marriage for women in India is:",
    options: ["16","17","12","18"],
    answer: "18"
  }
  // Add more questions here...
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const quizContainer = document.getElementById("quiz");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", () => selectAnswer(option));
  });
}

function selectAnswer(selectedAnswer) {
  const correctAnswer = quizData[currentQuestion].answer;

  if (selectedAnswer === correctAnswer) {
      score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
      showQuestion();
  } else {
      showResult();
  }
}

function showResult() {
  quizContainer.innerHTML = `
    <h1>Quiz Completed!</h1>
    <p>Your score: ${score}/${quizData.length}</p>
  `;
}

showQuestion();
// added answers
