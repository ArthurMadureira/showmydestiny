const answers = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim."
]

const btn = document.querySelector('button')
const input = document.querySelector('input')
const answerContent = document.getElementById('answer')

function showAnswer() {
  answerContent.style.opacity = 1
  if(input.value == "") {
    answerContent.innerHTML = 'Digite sua pergunta'
  } else {
    btn.setAttribute('disabled', true)
    const randomNumber = Math.floor(Math.random() * 19)
    const randomAnswer = answers[randomNumber]
    
    const questionDiv = `
    <div>${input.value}</div>
    `
    
    answerContent.innerHTML = questionDiv + randomAnswer
    
    setTimeout(()=> {
      btn.removeAttribute('disabled')
      answerContent.style.opacity = 0
    }, 3000)
  }
}


btn.addEventListener('click', showAnswer)