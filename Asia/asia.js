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
        //ASIA
        //South Asia
      {
        question: "What is the capital of Bangladesh?",
        answers: {
          a: "Ulaanbaatar",
          b: "Thimphu",
          c: "Dhaka"
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Sri Lanka?",
        answers: {
          a: "Kabul",
          b: "Colombo , Sri Jayawardenepura Kotte",
          c: "Pyongyang"
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Maldives?",
        answers: {
          a: "Male",
          b: "Banjul",
          c: "Taipei",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Afghanistan?",
        answers: {
          a: "Hanoi",
          b: "Kabul",
          c: "Quezon",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Taijikistan?",
        answers: {
          a: "Bishkek",
          b: "Dushanbe",
          c: "Ashgabat",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of India?",
        answers: {
          a: "Naypyidaw",
          b: "Goa",
          c: "New Delhi",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Nepal?",
        answers: {
          a: "Kathmandu",
          b: "Bangkok",
          c: "Quezon",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Bhutan?",
        answers: {
          a: "Hanoi",
          b: "Thimphu",
          c: "Jakarta",
        },
        correctAnswer: "b"
      },
      //East asia
      {
        question: "What is the capital of Taiwan?",
        answers: {
          a: "Taipei",
          b: "Nassau",
          c: "Sofia",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of South Korea?",
        answers: {
          a: "Manama",
          b: "Seoul",
          c: "Gitega",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Turmenistan?",
        answers: {
          a: "Bishkek",
          b: "Ashgabat",
          c: "Sana's",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Japan?",
        answers: {
          a: "Tokyo",
          b: "Osaka",
          c: "Luanda",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Mongolia?",
        answers: {
          a: "Ottawa",
          b: "Djibouti",
          c: "Ulaanbaatar",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of North Korea?",
        answers: {
          a: "Pyongyang",
          b: "Colombo",
          c: "Bandar Seri",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of East Timor?",
        answers: {
          a: "Tbilisi",
          b: "Dili",
          c: "Dhaka",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of China?",
        answers: {
          a: "Taipei",
          b: "Beijing",
          c: "Cairo",
        },
        correctAnswer: "b"
      },
      //Southeast Asia
      {
        question: "What is the capital of Indonesia?",
        answers: {
          a: "Riyadh",
          b: "Jakarta",
          c: "Bissau",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Cambodia?",
        answers: {
          a: "Phnom Penh",
          b: "Pyongyang",
          c: "Palikir",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Malaysia?",
        answers: {
          a: "Tbilisi",
          b: "Naypyidaw",
          c: "Kuala Lumpur",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Singapore?",
        answers: {
          a: "Singapore",
          b: "Singaphore",
          c: "Budapest",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Philippines?",
        answers: {
          a: "Quezon",
          b: "Manila",
          c: "Baghdad",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Laos?",
        answers: {
          a: "Vientiane",
          b: "Beirut",
          c: "Banjul",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Thailand?",
        answers: {
          a: "Jakarta",
          b: "Bangkok",
          c: "Accra",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Vietnam?",
        answers: {
          a: "Bamako",
          b: "Hanoi",
          c: "Tokyo",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Myanmar?",
        answers: {
          a: "Naypyidaw",
          b: "Valleta",
          c: "Lilongwe",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Brunei?",
        answers: {
          a: "Doha",
          b: "Nairobi",
          c: "Bandar Seri Begawan",
        },
        correctAnswer: "c"
      },
      //West Asia
      {
        question: "What is the capital of Iraq?",
        answers: {
          a: "Baghdad",
          b: "Managua",
          c: "Amman",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Kuwait?",
        answers: {
          a: "Niamey",
          b: "Khuwait City",
          c: "Kuwait City",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Cyprus?",
        answers: {
          a: "Manama",
          b: "Nicosia",
          c: "Damascus",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Lebanon?",
        answers: {
          a: "Beirut",
          b: "Lima",
          c: "Burma",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Jordan?",
        answers: {
          a: "Oman",
          b: "Amman",
          c: "Skopje",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Iran?",
        answers: {
          a: "Tehran",
          b: "Tibilisi",
          c: "Theran",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Oman?",
        answers: {
          a: "Managua",
          b: "Malta",
          c: "Muscat",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Israel?",
        answers: {
          a: "Amman",
          b: "Jerusalem",
          c: "Pristina",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Yemen?",
        answers: {
          a: "Sana'a",
          b: "Beirut",
          c: "New Delhi",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Kazaktan?",
        answers: {
          a: "Male",
          b: "Nur-Sultan",
          c: "Bishkek",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Qatar?",
        answers: {
          a: "Kuwait City",
          b: "Damascus",
          c: "Doha",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Saudi Arabia?",
        answers: {
          a: "Hanoi",
          b: "Baghdad",
          c: "Riyadh",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Kyrgyzstan?",
        answers: {
          a: "Nur-Sultan",
          b: "Bishkek",
          c: "Naypyidaw",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Armenia?",
        answers: {
          a: "Haag",
          b: "Yerevan",
          c: "Chisinau",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Bahrain?",
        answers: {
          a: "Manama",
          b: "Oman",
          c: "Abu Dhabi",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Azerbaijan?",
        answers: {
          a: "Thimphu",
          b: "Dili",
          c: "Baku",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Syria?",
        answers: {
          a: "Juba",
          b: "Damascus",
          c: "Dakar",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of United Arab Emirates?",
        answers: {
          a: "Abu Dhabi",
          b: "Moscow",
          c: "Muscat",
        },
        correctAnswer: "a"
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
  