// precisa selecionar todos os elementos em "comum"
// todo mundo que for aluno
const todosOsAlunos = document.querySelectorAll(".aluno");

// para cada aluno que esta na lista, voce vai fazer alguma coisa
for(let indice = 0; indice < todosOsAlunos.length; indice ++){
    
    // preciso saber quem vai assumir a posicao
    const aluno = todosOsAlunos[indice];

    // qual a primeira nota, da primeira aluna
    const primeiraNota = aluno.querySelector(".info-notaum");
    const nota1 = primeiraNota.textContent;

    const segundaNota = aluno.querySelector(".info-notadois");
    const nota2 = segundaNota.textContent;

    const media = aluno.querySelector(".info-media");
    const calculoMedia = (parseFloat(nota1) + parseFloat(nota2)) / 2;

    media.textContent = calculoMedia.toFixed(2);
 

}
