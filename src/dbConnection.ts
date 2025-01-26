import { Client } from 'pg';

const client = new Client({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const connectDb = async () => {
  try {
    await client.connect();
    console.log('Conectado ao banco de dados PostgreSQL');
  } catch (err) {
    if (err instanceof Error) {
      console.error('Erro ao conectar ao banco de dados:', err.stack);
    } else {
      console.error('Erro ao conectar ao banco de dados:', err);
    }
  }
};

export { client, connectDb };
