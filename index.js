// const quizData = [
//     {
//       question: "Question 1: Equality Smackdown!The Indian Constitution guarantees women are treated just as fairly as men. Which articles give women this super power?",
//       options: ["Articles of Style (we wish!)","Articles 14 & 15 (Equality Champs!)","Articles on Tea Breaks (because everyone deserves a break!)","Articles of Friendship (girl power!)"],
//       answer: "Articles 14 & 15 (Equality Champs!)"
//     },
//     {
//       question: "Question 2: Job Interview Woes? Don't Sweat It!Can a government job interview tell you 'no'just because you're a woman? ",
//       options: ["Girl, Boss Up! That's illegal (thanks, Articles 14 & 16!)", "Maybe, interview skills matter more."],
//       answer: "Girl, Boss Up! That's illegal (thanks, Articles 14 & 16!)"
//     },
//     {
//         question: "Question 3: Say NO to Workplace Harassment! Which superhero act protects women from being treated unfairly at work, like unwanted comments or advances?",
//         options: ["The Snack Time Protection Act (everyone deserves peace during lunch!)","The Sexual Harassment of Women at Workplace Act, 2013 (Now that's a shield!)","The Bring Your Pet to Work Act (because fluffy friends can cheer anyone up!)"," The Super Speed Act (so you can zoom away from trouble!)"],
//         answer: "The Sexual Harassment of Women at Workplace Act, 2013 (Now that's a shield!)"
//     },
//     {
//         question: "Question 4: Local Leader Lady! ‍♀️The 73rd and 74th amendments are like magic spells, reserving seats in local bodies for women. This is awesome because:",
//         options:[" More women = More Girl Power in government!","Double the trouble for bad guys (of course not, but more women making decisions!)","Free makeovers for all female leaders! (Wishful thinking!)","More tea parties in council meetings (not quite!)"],
//         answer:""
//     }
//     // Add more questions here...
//   ];
  
//   const questionElement = document.getElementById("question");
//   const optionsElement = document.getElementById("options");
//   const submitButton = document.getElementById("submit");
  
//   let currentQuestion = 0;
//   let score = 0;
  
//   function showQuestion() {
//     const question = quizData[currentQuestion];
//     questionElement.innerText = question.question;
  
//     optionsElement.innerHTML = "";
//     question.options.forEach(option => {
//       const button = document.createElement("button");
//       button.innerText = option;
//       optionsElement.appendChild(button);
//       button.addEventListener("click", selectAnswer);
//     });
//   }
  
//   function selectAnswer(e) {
//     const selectedButton = e.target;
//     const answer = quizData[currentQuestion].answer;
  
//     if (selectedButton.innerText === answer) {
//       score++;
//     }
  
//     currentQuestion++;
  
//     if (currentQuestion < quizData.length) {
//       showQuestion();
//     } else {
//       showResult();
//     }
//   }
  
//   function showResult() {
//     quiz.innerHTML = `
//       <h1>Quiz Completed!</h1>
//       <p>Your score: ${score}/${quizData.length}</p>
//     `;
//   }
  
//   showQuestion();

const quizData = [
    {
      question: "Question 1:<span>Equality Smackdown!</span>The Indian Constitution guarantees women are treated just as fairly as men. Which articles give women this superpower?",
      options: ["Articles of Style (we wish!)", "Articles 14 & 15 (Equality Champs!)", "Articles on Tea Breaks (because everyone deserves a break!)", "Articles of Friendship (girl power!)"],
      answer: "Articles 14 & 15 (Equality Champs!)",
      image: "women-empowerment-with-woman-cartoon-from-side-vector-35079859.jpg"
    },
    {
      question: "Question 2: Job Interview Woes? Don't Sweat It! Can a government job interview tell you 'no' just because you're a woman?",
      options: ["Girl, Boss Up! That's illegal (thanks, Articles 14 & 16!)", "Maybe, interview skills matter more."],
      answer: "Girl, Boss Up! That's illegal (thanks, Articles 14 & 16!)",
      image: "women-empowerment-with-woman-cartoon-from-side-vector-35079859.jpg"
    },
    {
      question: "Question 3: Say NO to Workplace Harassment! Which superhero act protects women from being treated unfairly at work, like unwanted comments or advances?",
      options: ["The Snack Time Protection Act (everyone deserves peace during lunch!)", "The Sexual Harassment of Women at Workplace Act, 2013 (Now that's a shield!)", "The Bring Your Pet to Work Act (because fluffy friends can cheer anyone up!)", "The Super Speed Act (so you can zoom away from trouble!)"],
      answer: "The Sexual Harassment of Women at Workplace Act, 2013 (Now that's a shield!)",
      image: "women-empowerment-with-woman-cartoon-from-side-vector-35079859.jpg"
    },
    {
      question: "Question 4: Local Leader Lady! The 73rd and 74th amendments are like magic spells, reserving seats in local bodies for women. This is awesome because:",
      options: ["More women = More Girl Power in government!", "Double the trouble for bad guys (of course not, but more women making decisions!)", "Free makeovers for all female leaders! (Wishful thinking!)", "More tea parties in council meetings (not quite!)"],
      answer: "More women = More Girl Power in government!",
      image: "women-empowerment-with-woman-cartoon-from-side-vector-35079859.jpg"
    }
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
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
      button.addEventListener("click", selectAnswer);
    });
  
    // Display image related to the question
    const image = document.createElement("img");
    image.src = question.image;
    quizContainer.appendChild(image);
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
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
  