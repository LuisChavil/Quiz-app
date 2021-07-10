const quizData = [
    {
        question: 'Make sure the IF and ELIF statements end with __',
        a: 'colons',
        b: 'periods',
        c: 'question mark',
        d: 'dollar sign',
        correct: 'a'
    },

    {
        question: 'What is the most used programming language in 2021',
        a: 'Java',
        b: 'Python',
        c: 'Ruby',
        d: 'C',
        correct: 'd'
    },

    {
        question: 'The __ function takes any number of arguments and returns the largest one?',
        a: 'floor()',
        b: 'ceil()',
        c: 'max()',
        d: 'tolower()',
        correct: 'c'
    },

    {
        question: 'The term for text in a programming language is __',
        a: 'Syntax',
        b: 'Print',
        c: 'Integer',
        d: 'String',
        correct: 'd'
    },

    {
        question: 'A set of clearly defined, logical steps that solve a problem is __',
        a: 'while loop',
        b: 'Algorithm',
        c: 'Flow chart',
        d: 'none of the above',
        correct: 'b'
    }




];

const answersElements = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const quiz = document.getElementById("quiz");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
    
}

function getSelected(){
    
    let answer = undefined;
    answersElements.forEach((answersElements) => {
        if (answersElements.checked){
            answer = answersElements.id;
        }
    });
        return answer;

   

}


function deselectAnswers(){
    answersElements.forEach((answersElements) => {
       answersElements.checked = false;
    });
    
}



submitbtn.addEventListener("click", () => {
    // Check to see the answer
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length){
            loadQuiz();
        } else{
            // TODO: Show results
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions. </h2>
            <button onclick = "location.reload()">Reload</button>`
        }
    }
})