import Genero from './Genero';
import Animais from './Animais';
import Visitas from './Visitas';
import Bebidas from './Bebidas';
import Fumantes from './Fumantes';
import Festas from './Festas';


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
      <Bebidas />
      <Fumantes />
      <Festas />

      <button type="submit">Enviar</button>
    </form>
  )
};

export default Form;
