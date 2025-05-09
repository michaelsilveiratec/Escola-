const API_URL_= 
"https://school-system-spi.onrender.com/api/professores";

const buttonProfessores = document.getElementById("listadeProfessores");
const listaProfessores = document.getElementById("professores-lista");

buttonProfessores.addEventListener ("click", async () => {
    const api = await fetch(API_URL_);
    const dados = await api.json();
    console.log(dados);

    listaProfessores.innerHTML = "<h2>Lista de Professores</h2>" + 
    dados.map((professor) =>{
        return `
        <div>
            <h3>Nome: ${professor.nome}</h3>
            <p>Materia: ${professor.materia}</p>
            <p>Observações: ${professor.observacoes}</p>
            <p>Idade: ${professor.idade}</p>
        </div>
        `
    })
});