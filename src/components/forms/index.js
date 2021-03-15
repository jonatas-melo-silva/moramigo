import Genero from './genero';

const Form = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
  };

  return (

    <form onSubmit={handleSubmit}>

      <Genero/>

      <button type="submit">Enviar</button>
    </form>
  )
};

export default Form;
