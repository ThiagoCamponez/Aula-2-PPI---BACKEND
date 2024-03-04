import Cliente from "./Modelos/Cliente.js";

const cliente = new Cliente(1, "080.370.779.77", "Thiago Henrique dos Santos Camponêz", "Rua Joaquim Campos, 188", "Centro", "Santa Inês", "PR", "(44)99945-9744", "thiagocamponez2@gmail.com");

//Nos métodos assíncronos é preciso manipular as promessas(Promisses)
//Então em algum momento o método trará uma resposta e o nosso programa não saberá quando isso irá acontecer

/*cliente.gravar().then(() =>{
    console.log('Cliente gravado com sucesso!');
}).catch( (erro) => {
    console.log(erro.message);
})*/

cliente.atualizar().then(() =>{
    console.log('Cliente Atualizado!');
}).catch( (erro) => {
    console.log(erro.message);
});

