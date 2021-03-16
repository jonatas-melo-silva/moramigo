import Style from './styles';
import { Link } from 'react-router-dom';


const HeaderMain = () => {
  return (
    <>
      <header>
          <div className = "menu">
                <Link to="/buscarpessoas">Buscar Pessoas</Link>
                <h1>MORAMIGO</h1>
          </div>
      </header>
      <Style />

    </>

  );
}

export default HeaderMain;
