
import Style from './styles';
import HeaderBuscarPessoas from './HeaderBuscarPessoas';
import Form from './Forms';
import Cards from './Cards';
import Rodape from '../Main/Rodape';


const BuscarPessoas = () => {

  return (
    <>
      <HeaderBuscarPessoas/>
      <div className = "forms">
      <Form/>
      </div>
      <Style />
      <Cards/>
      <Rodape/>
  
    </>

  );
}

export default BuscarPessoas;
