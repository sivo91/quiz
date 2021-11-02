const quizData =[
      {
        question : "How long did thirty years war last ?",
        a: 3,
        b: 33,
        c: 30,
        d: 330,
        correct: "c"
     },
     {
        question : "When javascript was invented?",
        a: 1995,
        b: 2005,
        c: 1990,
        d: 2000,
        correct: "a"
     },
     {
       question : "Who has invented JavaScript?",
       a: "B Eich",
       b: "John Doe",
       c: "Håkon W Lie",
       d: "P Mark",
       correct: "a"
     }
]


const container = document.getElementById('container')
const moznosti = document.querySelectorAll('.answer')
const otazka = document.getElementById('otazka')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const btn = document.getElementById('btn')

let objQuizData = 0
let score = 0

loadQuiz()

function loadQuiz(){
  deselectAnswers()

  const currentQuizData = quizData[objQuizData]

  otazka.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
  moznosti.forEach(otazka => otazka.checked = false)
}

function getSelected(){
  let answer

  moznosti.forEach(otazka => {
    if(otazka.checked) {
      answer = otazka.id
    }
  })

  return answer
}

btn.addEventListener('click', () => {
  const answer = getSelected()
  
   if(answer) {
     if(answer === quizData[objQuizData].correct) {
       score++
     }

     objQuizData++

     if(objQuizData < quizData.length) {
       loadQuiz()
     } else {
       container.innerHTML = `
         <h3> Correct answers ${score} </h3>
         <h5> "How long did thirty years war last ? </h5>
        <li> 3 </li>
        <li> 33 </li>
        <li class="color"> 30 = correct </li>
        <li> 330 </li>

        <h5> When javascript was invented? </h5>
        <li class="color"> 1995 = correct </li>
        <li> 2005 </li>
        <li> 1990 </li>
        <li> 2000 </li>

        <h5> Who has invented JavaScript? </h5>
        <li class="color"> B Eich = correct </li>
        <li> John Doe </li>
        <li> H W Lie </li>
        <li> P Mark </li>
       `
     }
   }

})

 // ${quizData.length}












