import { useState } from 'react';

const Genero = () => {

  const [FormValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log('data', name, value);
    setFormValues({ ...FormValues, [name]: value });
  }

  return (
    <select name="genero" onChange={handleInputChange} value={FormValues.genero || ''}>
      <option value="M">Masculino</option>
      <option value="F">Feminino</option>
      <option value="O">Outro</option>
      <option value="T">Tanto faz</option>
    </select>
  );
}

export default Genero;
