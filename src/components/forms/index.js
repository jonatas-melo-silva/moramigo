import Genero from './genero';
import Animais from './animais';
import Visitas from './visitas';
import Bebidas from './bebidas';
import Fumantes from './fumantes';
import Festas from './festas';


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
