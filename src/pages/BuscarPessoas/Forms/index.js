import Genero from './Genero';
import Animais from './Animais';
import Visitas from './Visitas';
import Bebidas from './Bebidas';
import Fumantes from './Fumantes';
import Festas from './Festas';
import Localidades from './Localidades';


const Form = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
  };

  return (

    <form onSubmit={handleSubmit}>

      <Genero />
      <Animais />
      <Visitas />
      <button type="submit" className = "btn-buscarPessoas">
        Buscar
      </button>
      <Bebidas />
      <Fumantes />
      <Festas />
      <Localidades/>

    </form>
  )
};

export default Form;
