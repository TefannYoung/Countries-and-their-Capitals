(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      // America South
      {
        question: "What is the capital of Brazil?",
        answers: {
          a: "Brazil",
          b: "Brasilia",
          c: "San Pablo",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Ecuador?",
        answers: {
          a: "Quito",
          b: "Gaborone",
          c: "Ecuador City",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Bolivia?",
        answers: {
          a: "La Paz & Sucre",
          b: "Santiago",
          c: "Sao",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Paraguay?",
        answers: {
          a: "Asunsion",
          b: "Asunción",
          c: "Paraguay City",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Argentina?",
        answers: {
          a: "Lomé",
          b: "Roseau",
          c: "Buenos Aires",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Chile?",
        answers: {
          a: "Santiago",
          b: "San Santiago",
          c: "San Carlo",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Venezuela?",
        answers: {
          a: "Venezuela City",
          b: "Caracas",
          c: "Basseterre",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Suriname?",
        answers: {
          a: "San Pablo",
          b: "Paramaribo",
          c: "Quito",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Colombia?",
        answers: {
          a: "Bogotá",
          b: "Colombia",
          c: "La Paz",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Peru?",
        answers: {
          a: "Lima",
          b: "Peru Ciy",
          c: "Paz Sucre",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Uruguay?",
        answers: {
          a: "Lomé",
          b: "Uruguay",
          c: "Montevideo",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Guyana?",
        answers: {
          a: "Georgetown",
          b: "Cayenne",
          c: "Kingstown",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of French Guiana?",
        answers: {
          a: "Saint Luise",
          b: "San Carlo",
          c: "Cayenne",
        },
        correctAnswer: "c"
      },
    ];
  
    
    function randomize(a, b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z) {
      return Math.random() - 0.5;
  }
  
  myQuestions.sort(randomize);
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();

