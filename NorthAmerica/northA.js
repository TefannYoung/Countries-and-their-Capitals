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
      //America North
      {
        question: "What is the capital of United States of America (USA)?",
        answers: {
          a: "Nassau",
          b: "Washington D.C",
          c: "Basseterre",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Cuba?",
        answers: {
          a: "Havana",
          b: "Castries",
          c: "Hanoi",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Honduras?",
        answers: {
          a: "Tegucigalpa",
          b: "Cuba",
          c: "Apia",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Costa Rica?",
        answers: {
          a: "San Pablo",
          b: "San Carlo",
          c: "San José",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Panama City?",
        answers: {
          a: "Lomé",
          b: "Gaborone",
          c: "Panama City",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Trinidad and Tobago?",
        answers: {
          a: "Port of Trinidad",
          b: "Port of Spain",
          c: "Port of Tobago",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Barbados?",
        answers: {
          a: "Bridgetown",
          b: "Managua",
          c: "San Salvador",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Antigua & Barbuda?",
        answers: {
          a: "Saint John's",
          b: "Saint George's",
          c: "Saint Clara",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Canada?",
        answers: {
          a: "Vancuver",
          b: "Ottawa",
          c: "Toronto",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Haiti?",
        answers: {
          a: "Port-au-Prince",
          b: "Port-au-Haiti",
          c: "Port-au-Tacoma",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Nicaragua?",
        answers: {
          a: "Belmopan",
          b: "Managua",
          c: "Cayenne",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Jamaica?",
        answers: {
          a: "Jamaica City",
          b: "Georgetown",
          c: "Kingston",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Belize?",
        answers: {
          a: "Lima",
          b: "Belmopan",
          c: "Apia",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Saint Lucia?",
        answers: {
          a: "San Carlo",
          b: "San Luise",
          c: "Castries",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Dominica?",
        answers: {
          a: "Dominica City",
          b: "Gaborone",
          c: "Roseau",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Mexico?",
        answers: {
          a: "Mexico City",
          b: "Quito",
          c: "Taxco",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Dominican Republic?",
        answers: {
          a: "Santo Dominic",
          b: "Santo Rafael",
          c: "Santo Domingo",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of El Salvador?",
        answers: {
          a: "San Sebastian",
          b: "San Salvador",
          c: "San Sebastiane",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Guatemala?",
        answers: {
          a: "Lima",
          b: "Guatemala City",
          c: "Santiago",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Bahamas?",
        answers: {
          a: "Bahamas City",
          b: "Sao",
          c: "Nassau",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Grenada?",
        answers: {
          a: "Saint George's",
          b: "Saint Paz",
          c: "Grenada City",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Saint Kitts & Nevis?",
        answers: {
          a: "Kitts",
          b: "Cayenne",
          c: "Basseterre",
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

