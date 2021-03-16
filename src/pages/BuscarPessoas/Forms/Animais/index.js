import { useState } from 'react';

const Animais = () => {
  const [FormValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log('data', name, value);
    setFormValues({ ...FormValues, [name]: value });
  }

  return (
    <select name="animais" onChange={handleInputChange} value={FormValues.genero || ''}>
      <option value="S">Com animais</option>
      <option value="N">Sem animais</option>
      <option value="T">Tanto faz</option>
    </select>
  );
}

export default Animais;
