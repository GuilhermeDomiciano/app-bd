const { Client } = require('pg');

const client = new Client({
  host: process.env.DB_HOST,      // Endpoint do banco de dados no AWS RDS
  port: process.env.DB_PORT || 5432, // Porta do PostgreSQL (padrão: 5432)
  user: process.env.DB_USER,      // Nome de usuário para a conexão
  password: process.env.DB_PASSWORD, // Senha do banco de dados
  database: process.env.DB_NAME   // Nome do banco de dados
});

// Função para conectar ao banco
const connectDb = async () => {
  try {
    await client.connect();
    console.log('Conectado ao banco de dados PostgreSQL');
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
  }
};

// Exportar a função de conexão
module.exports = { client, connectDb };
