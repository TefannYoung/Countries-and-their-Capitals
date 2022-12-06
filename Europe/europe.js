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
      //Europe- Balkan 
      {
        question: "What is the capital of Romania?",
        answers: {
          a: "Bucharest",
          b: "Pristina",
          c: "Belgrade",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Slovenia?",
        answers: {
          a: "Helsinki",
          b: "Ljubljana",
          c: "Sofia",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of North Macedonia?",
        answers: {
          a: "Skopje",
          b: "Sao Tome",
          c: "Bratislava",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Montenegro?",
        answers: {
          a: "Apia",
          b: "Zagreb",
          c: "Podogorica",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Serbia?",
        answers: {
          a: "Dushanbe",
          b: "Kampala",
          c: "Belrade",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Albania?",
        answers: {
          a: "Tirana",
          b: "Lome",
          c: "Oslo",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Bulgaria?",
        answers: {
          a: "Dodoma",
          b: "Sofia",
          c: "Montevideo",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Kosovo?",
        answers: {
          a: "Pristina",
          b: "Srajevo",
          c: "Caracas",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Croatia?",
        answers: {
          a: "Minsk",
          b: "Zagreb",
          c: "Riga",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Bosnia and Herzegovina?",
        answers: {
          a: "Khartoum",
          b: "Sarao",
          c: "Sarajevo",
        },
        correctAnswer: "c"
      },
      // Europe - Nordic
      {
        question: "What is the capital of Denmark?",
        answers: {
          a: "Oslo",
          b: "Stockholm",
          c: "Copenhagen",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Norway?",
        answers: {
          a: "Nuku'alofa",
          b: "Nassau",
          c: "Oslo",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Sweden?",
        answers: {
          a: "Funafuti",
          b: "Pararibo",
          c: "Stockholm",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Iceland?",
        answers: {
          a: "Reykjavik",
          b: "Vilnius",
          c: "Tunis",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Finland?",
        answers: {
          a: "Helsinki",
          b: "Tallin",
          c: "Bern",
        },
        correctAnswer: "a"
      },
      //East Europe
      {
        question: "What is the capital of Czechia(Czech Republic)?",
        answers: {
          a: "Prague",
          b: "Vaduz",
          c: "Berlin",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Hungary?",
        answers: {
          a: "Bucharest",
          b: "Bhutan",
          c: "Budapest",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Poland?",
        answers: {
          a: "Warsaw",
          b: "Lisbon",
          c: "Riga",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Serbia?",
        answers: {
          a: "Bern",
          b: "Belgrade",
          c: "Bratislava",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Estonia?",
        answers: {
          a: "Helsinki",
          b: "Tbilisi",
          c: "Tallin",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Latvia?",
        answers: {
          a: "Riga",
          b: "Ronga",
          c: "Valleta",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Finland?",
        answers: {
          a: "Helsinki",
          b: "Chăuvt",
          c: "Chișinău",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Slovakia?",
        answers: {
          a: "Bratislava",
          b: "Minsk",
          c: "Bratslo",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Belarus?",
        answers: {
          a: "Budapest",
          b: "Monaco",
          c: "Minsk",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Georgia?",
        answers: {
          a: "Brussels",
          b: "Tbilisi",
          c: "Podgorica",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Lithuania?",
        answers: {
          a: "Prague",
          b: "Tallin",
          c: "Vilnius",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Russia?",
        answers: {
          a: "Oslo",
          b: "Muscat",
          c: "Moscow",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Ukraine?",
        answers: {
          a: "Riga",
          b: "Kiev",
          c: "Copenhagen",
        },
        correctAnswer: "b"
      },
      //West Europe
      {
        question: "What is the capital of Andorra?",
        answers: {
          a: "Podgorica",
          b: "Andorra la Vella",
          c: "San Marino",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Monaco?",
        answers: {
          a: "Monaco",
          b: "Ankara",
          c: "Bern",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Belgium?",
        answers: {
          a: "Brussels",
          b: "Khartoum",
          c: "Sarajevo",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Greece?",
        answers: {
          a: "Athens",
          b: "Ronga",
          c: "Valleta",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Liechtenstein?",
        answers: {
          a: "Riga",
          b: "Vaduz",
          c: "Valduz",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of San Marino?",
        answers: {
          a: "San Sebastian",
          b: "San Juan",
          c: "San Marino",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Turkey?",
        answers: {
          a: "Asuncion",
          b: "Ankara",
          c: "Caracas",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Austria?",
        answers: {
          a: "Vienna",
          b: "Sucre",
          c: "Cayenne",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of France?",
        answers: {
          a: "Florence",
          b: "Rome",
          c: "Paris",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Ireland?",
        answers: {
          a: "Dublin",
          b: "Wales",
          c: "London",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Luxembourg?",
        answers: {
          a: "Zagreb",
          b: "Luxembourg",
          c: "Sarajevo",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Netherlands?",
        answers: {
          a: "Amsterdam & Haag",
          b: "Nuuk",
          c: "Belmopan",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Spain?",
        answers: {
          a: "Paris",
          b: "Madrid",
          c: "Rome",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Germany?",
        answers: {
          a: "Berlin",
          b: "Havana",
          c: "Saint John's",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Maldova?",
        answers: {
          a: "Chisinau",
          b: "Rigo",
          c: "Vilnius",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Italy?",
        answers: {
          a: "Ottawa",
          b: "Ankara",
          c: "Rome",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Malta?",
        answers: {
          a: "Nicosia",
          b: "Dhaka",
          c: "Valletta",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Portugal?",
        answers: {
          a: "Monaco",
          b: "Dili",
          c: "Lisbon",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of United Kingdom?",
        answers: {
          a: "Glasgow",
          b: "London",
          c: "Kingston",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Switzerland?",
        answers: {
          a: "Kabul",
          b: "Baku",
          c: "Bern",
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

