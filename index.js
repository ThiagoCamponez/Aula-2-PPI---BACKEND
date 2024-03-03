import Cliente from "./Modelos/Cliente.js";

const cliente = new Cliente(0, "615.854.649-15", "Isabelly Aparecida dos Santos Camponêz", "Rua Joaquim Campos, 188", "Centro", "Santa Inês", "PR", "(44)98415-4651", "isa.camponez@gmail.com");

//Nos métodos assíncronos é preciso manipular as promessas(Promisses)
//Então em algum momento o método trará uma resposta e o nosso programa não saberá quando isso irá acontecer

cliente.gravar().then(() =>{
    console.log('Cliente gravado com sucesso!');
}).catch( (erro) => {
    console.log(erro.message);
})

