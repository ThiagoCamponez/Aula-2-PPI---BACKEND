//O banco de dados escolhido foi o MYSQL
import mysql from 'mysql2/promise';

//Vamos desenvolver código assíncrono, pois nossa aplicação se comunica com o banco de dados.
//Podendo obter a resposta de imediato, demorar pra responder ou nunca responder.
//Por isso usa-se o async e o await.

export default async function conectar(){
    if(global.pool !== undefined){
        return await global.pool.getConnection();
    }
    else{
        const pool = mysql.createPoll({
            host: 'localhost',
            user: 'root', // Não é recomendado, pois a aplicação vai ter acesso a tudo do banco de dados
            password: 'Thiago123',
            port: 3307,
            database: 'backend',
            waitForConnections: true,
            connectionsLimit: 10,
            maxIdle: 10, 
            idleTimeout: 360000,
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0,
        });
        
        //Garantindo que haja somente uma cópia desse pool para a minha aplicação
        global.pool = poll;
        return await pool.getConnection();
    }
}