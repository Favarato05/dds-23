console.log("SIM");

// CALLBACK
// FUNÇÃO PRINCIPAL
// FUNÇÃO QUE SERÁ O CALLBACK
function finalizar(){
    console.log("Acabei");
}

// FUNÇÃO PRINCIPAL
function processar(callback){
    console.log("Inciando o procedimeno das informações...");
    callback()
}

// Executo a função principal, atrelando ao callback
processar(finalizar)


// CALLBACK COM FUNÇÃO ANÔNIMA
function executarTarefa(callback){
    console.log("Iniciando a execução da arefa...");
    // executa uma funcao com delay
    setTimeout(callback, 3000)
}

executarTarefa(() => {
    console.log("Acabou a tarefa");
})

// CALLBACK COMO CONDIÇÃO SIMPLES
function verificarNota(nota, callback){
    if(nota >= 7){
        callback()
    }
}

function aprovado(){
    console.log("Congratulations, você é o milior.");
}

verificarNota(8, aprovado)

// verificação com dois callbacks

// Se deu certo
function loginCorreto(){
    console.log("Parabéns, logado com sucesso");
}

// se deu errado
function loginErrado(){
    console.log("Usuário ou senha errados");
}
function validarSenha(senha, sucesso, erro){
    // Verifica a senha e se estiver correta chama o clback de sucesso
    if(senha == "1234"){
        sucesso()
    }
    // Se deu erro, chama o outro callback
    else{
        erro()
    }
}

console.log("-----------------------")
// executar os testes
// com senha errada
validarSenha("7", loginCorreto, loginErrado)

console.log("-----------------------")
// com senha certa
validarSenha("1234", loginCorreto, loginErrado)