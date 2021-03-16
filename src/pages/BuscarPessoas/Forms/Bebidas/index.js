import { useState } from 'react';

const Bebidas = () => {

  const [FormValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log('data', name, value);
    setFormValues({ ...FormValues, [name]: value });
  }

  return (
    <div>
    <label>Bedidas</label>
    <select name="bebidas" onChange={handleInputChange} value={FormValues.bebidas || ''}>
      <option value="">Selecione</option>
      <option value="S">Podem beber</option>
      <option value="N">Sem bebidas</option>
      <option value="T">Tanto faz</option>
    </select>
    </div>
  );

}

export default Bebidas;
