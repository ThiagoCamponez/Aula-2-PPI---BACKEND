//Classe é uma abstração de uma ENTIDADE do mundo real
//Em Orientação a Objetos, uma Classe possui MÉTODOS e ATRIBUTOS
//ATRIBUTOS são características de um OBJETO
//MÉTODOS são as ações que um OBJETO pode executar

import ClienteDAO from "../Persistencia/ClienteDAO.js";

export default class Cliente{     //Assim que define uma classe em JS  
    //export default para exportar a classe, pois será consumida por todo o resto da aplicação
    //Somente por meio de Métodos Públicos é que podemos acessar os atributos de uma classe
    //Em JS definimos atributos privados usando #
    
    #codigo; //Atributos privados
    #cpf;
    #nome;
    #endereco;
    #bairro;
    #cidade;
    #estado;
    #telefone;
    #email;

    //Abaixo, os atributos privados recebem os parâmetros do construtor

    constructor(codigo = 0, cpf = "", nome = "", endereco = "", bairro = "", cidade = "", estado = "", telefone = "", email = ""){
        this.#codigo = codigo;
        this.#cpf = cpf;
        this.#nome = nome;
        this.#endereco = endereco;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#estado = estado;
        this.#telefone = telefone;
        this.#email = email;
    }

    //Definir os métodos de acesso aos atributos de um Cliente

    get codigo(){ 
        return this.#codigo;  //Métodos de acesso público
    }

    set codigo(novoCodigo){
        this.#codigo = novoCodigo;
    }


    get cpf(){
        return this.#cpf;
    }

    set cpf(novoCpf){
        this.#cpf = novoCpf;
    }


    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome = novoNome;
    }


    get endereco(){
        return this.#endereco;
    }

    set endereco(novoEndereco){
        this.#endereco = novoEndereco;
    }


    get bairro(){
        return this.#bairro;
    }

    set bairro(novoBairro){
        this.#bairro = novoBairro;
    }


    get cidade(){
        return this.#cidade;
    }

    set cidade(novaCidade){
        this.#cidade = novaCidade;
    }


    get estado(){
        return this.#estado;
    }
    
    set estado(novoEstado){
        this.#estado = novoEstado;
    }


    get telefone(){
        return this.#telefone;
    }

    set telefone(novoTelefone){
        this.#telefone = novoTelefone;
    }


    get email(){
        return this.#email;
    }

    set email(novoEmail){
        this.#email = novoEmail;
    }

    //Como armazenar os clientes no banco de dados?

    async gravar(){
        const dao = new ClienteDAO();
        await dao.gravar(this); //this pode ser compreendido com a seguinte expressão: "Grave a mim mesmo"
    }

    async atualizar(){
        const dao = new ClienteDAO();
        await dao.atualizar(this);
    }
    
    async excluir(){
        const dao = new ClienteDAO();
        await dao.excluir(this);
    }
    
    consultar(termoDePesquisa){
        const dao = new ClienteDAO();
        return dao.consultar(termoDePesquisa);
    }

    //Override do método toString da classe pai Object

    toString(){
        return `Cliente código: ${this.#codigo} - nome: ${this.#nome}`;
    }

    toJSON(){
        return{
            "codigo": this.#codigo,
            "cpf":this.#cpf,
            "nome": this.#nome,
            "endereco": this.#endereco,
            "bairro": this.#bairro,
            "cidade": this.#cidade,
            "estado": this.#estado,
            "telefone": this.#telefone,
            "email": this.#email
        }
    }
}