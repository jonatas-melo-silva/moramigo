import { Title } from './styles';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <Title>MORAMIGO</Title>
      <Link to="/buscarpessoas">Buscar Pessoas</Link>
    </>

  );
}

export default Main;
