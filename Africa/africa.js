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
      
      //Africa North
      {
        question: "What is the capital of Algeria?",
        answers: {
          a: "Tunis",
          b: "Algiers",
          c: "Dodoma",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Sudan?",
        answers: {
          a: "Porto",
          b: "Khartoum",
          c: "Lilongwe",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Egypt?",
        answers: {
          a: "Cairo",
          b: "Bishkek",
          c: "Manama",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Libya?",
        answers: {
          a: "Tripoli",
          b: "Tbilisi",
          c: "Thimphu",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Tunisia?",
        answers: {
          a: "Male",
          b: "Tunis",
          c: "Beirut",
        },
        correctAnswer: "b"
      },
      //Africa Eastern
      {
        question: "What is the capital of Ugada?",
        answers: {
          a: "Porto-Novo",
          b: "Kampala",
          c: "Vientiane",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Comoros?",
        answers: {
          a: "Kigali",
          b: "Amman",
          c: "Moroni",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Kenya?",
        answers: {
          a: "Asmara",
          b: "Nairobi",
          c: "Accra",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Mozambique?",
        answers: {
          a: "Monrovia",
          b: "Maputo",
          c: "Banjul",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Seychelles?",
        answers: {
          a: "Conakry",
          b: "Victoria",
          c: "Dushanbe",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of South Sudan?",
        answers: {
          a: "Juba",
          b: "Khartoum",
          c: "Tashkent",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Zambia?",
        answers: {
          a: "Lusaka",
          b: "Dakar",
          c: "Kigali",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Djibouti?",
        answers: {
          a: "Ashgabat",
          b: "Sana'a",
          c: "Djibouti",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Ethiopia?",
        answers: {
          a: "Bamako",
          b: "Abuja",
          c: "Addis Ababa",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Malawi?",
        answers: {
          a: "Banjul",
          b: "Lilongwe",
          c: "Niamey",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Somalia?",
        answers: {
          a: "Naypyidaw",
          b: "Mogadishu",
          c: "Bamako",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Burundi?",
        answers: {
          a: "Leone",
          b: "Lome",
          c: "Gitega",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Eritrea?",
        answers: {
          a: "Paramaribo",
          b: "Quito",
          c: "Asmara",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Mauritius?",
        answers: {
          a: "Port Louis",
          b: "Port Ritius",
          c: "Port Carlo",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Rwanda?",
        answers: {
          a: "Dougou",
          b: "Khartoum",
          c: "Kigali",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Tanzania?",
        answers: {
          a: "Yaounde",
          b: "Dodoma",
          c: "Niamey",
        },
        correctAnswer: "b"
      },
      //Africa Western
      {
        question: "What is the capital of Benin?",
        answers: {
          a: "Port-Nova",
          b: "Port-Novo",
          c: "Port-Verde",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Ivory Coast?",
        answers: {
          a: "Yamoussoukro",
          b: "Banqui",
          c: "Ouagadougou",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Guinea?",
        answers: {
          a: "Luanda",
          b: "Conakry",
          c: "Gaborone",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Mali?",
        answers: {
          a: "Bamako",
          b: "Pretoria",
          c: "Libreville",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Nigeria?",
        answers: {
          a: "Abuja",
          b: "Roseau",
          c: "Lima",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Togo?",
        answers: {
          a: "Lomé",
          b: "Belmopan",
          c: "Windhoek",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Burkina Faso?",
        answers: {
          a: "Ouagadougou",
          b: "Santo Domingo",
          c: "Antananarivo",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Gambia?",
        answers: {
          a: "Malabo",
          b: "Banjul",
          c: "Kinshasa",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Guinea-Bissau?",
        answers: {
          a: "Bissau",
          b: "Guinea-Bissau",
          c: "Guinea",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Mauritania?",
        answers: {
          a: "Libreville",
          b: "Nouakchott",
          c: "Tegucigalpa",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Senegal?",
        answers: {
          a: "Mbabane",
          b: "Dakar",
          c: "Nassau",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Cape Verde?",
        answers: {
          a: "Kingston",
          b: "Castries",
          c: "Praia",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Ghana?",
        answers: {
          a: "Accra",
          b: "Managua",
          c: "Basseterre",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Liberia?",
        answers: {
          a: "Monrovia",
          b: "Grenadines",
          c: "Sao Tome",
        },
        correctAnswer: "a"
      },
            {
        question: "What is the capital of Niger?",
        answers: {
          a: "Bangui",
          b: "Nigers",
          c: "Niamey",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Sierra Leone?",
        answers: {
          a: "Sierra",
          b: "Freetown",
          c: "Sierra Leone",
        },
        correctAnswer: "b"
      },
      //Africa Middle
      {
        question: "What is the capital of Angola?",
        answers: {
          a: "Luanda",
          b: "Yuanda",
          c: "Tome",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Chad?",
        answers: {
          a: "N'Djmena",
          b: "Djamena",
          c: "Moresby",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Equatorial Guinea?",
        answers: {
          a: "Mali",
          b: "Malawi",
          c: "Malabo",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Cameroon?",
        answers: {
          a: "Omman",
          b: "Niamey",
          c: "Yaoundé",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Republic of the Congo?",
        answers: {
          a: "Congo",
          b: "Brazzaville",
          c: "Dakar",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of São Tomé and Principe?",
        answers: {
          a: "São Tomé",
          b: "Banjul",
          c: "Principe",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Central African Republic?",
        answers: {
          a: "Bangui",
          b: "Palikir",
          c: "Windhoek",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Democratic Republic of the Congo?",
        answers: {
          a: "Maseru",
          b: "Kinshasa",
          c: "Tarawa",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of Gabon?",
        answers: {
          a: "Yemen",
          b: "Libreville",
          c: "Majuro",
        },
        correctAnswer: "b"
      },
      // Africa Southern
      {
        question: "What is the capital of South Africa?",
        answers: {
          a: "Cape Town , Pretoria , Blemfontein",
          b: "Cape Town , Peario , Blhemfontein",
          c: "Cape town , Paetore , Blemfonthein",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Lesotho?",
        answers: {
          a: "Maseru",
          b: "Canberra",
          c: "Suva",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Namibia?",
        answers: {
          a: "Yaren",
          b: "Ngerulmud",
          c: "Windhoek",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Eswatini?",
        answers: {
          a: "Funafuti",
          b: "Pretoria",
          c: "Mbabane, Lobamba",
        },
        correctAnswer: "c"
      },
      {
        question: "What is the capital of Madagascar?",
        answers: {
          a: "Antananarivo",
          b: "Honiara",
          c: "Brazzaville",
        },
        correctAnswer: "a"
      },
      {
        question: "What is the capital of Botswana?",
        answers: {
          a: "Lomé",
          b: "Gaborone",
          c: "Apia",
        },
        correctAnswer: "b"
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

