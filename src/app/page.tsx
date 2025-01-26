import { GetServerSideProps } from 'next';
import Pagina from "./components/template/Pagina";
import { client, connectDb } from '@/dbConnection';


export default function Home({ data }: { data: any }) {
  return (
    <Pagina>
      <h1>Opa</h1>
      <p>Dados do banco de dados: {JSON.stringify(data)}</p>
    </Pagina>
  );
}

// Função para buscar dados do banco de dados
export const getServerSideProps: GetServerSideProps = async () => {
  // Conectar ao banco de dados
  await connectDb();

  // Exemplo de consulta ao banco de dados
  const res = await client.query('SELECT * FROM sua_tabela');
  const data = res.rows;

  return {
    props: { data }, // Passando os dados para a página
  };
};
