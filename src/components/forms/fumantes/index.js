import { useState } from 'react';

const Fumantes = () => {

  const [FormValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log('data', name, value);
    setFormValues({ ...FormValues, [name]: value });
  }

  return (
    <select name="fumantes" onChange={handleInputChange} value={FormValues.genero || ''}>
      <option value="S">Podem fumar</option>
      <option value="N">Sem Fumantes</option>
      <option value="T">Tanto faz</option>
    </select>
  );

}

export default Fumantes;
