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
      <option value="1">Masculino</option>
      <option value="2">Feminino</option>
      <option value="3">Outro</option>
      <option value="4">Tanto faz</option>
    </select>
  );
}

export default Genero;
