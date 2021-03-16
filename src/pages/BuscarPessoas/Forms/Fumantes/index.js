import { useState } from 'react';


const Fumantes = () => {

  const [FormValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log('data', name, value);
    setFormValues({ ...FormValues, [name]: value });
  }

  return (
    <div>
      <label>Fumantes</label>
    <select name="fumantes" onChange={handleInputChange} value={FormValues.fumantes || ''}>
      <option value="">Selecione</option>
      <option value="S">Podem fumar</option>
      <option value="N">Sem Fumantes</option>
      <option value="T">Tanto faz</option>
    </select>
    </div>
  );

}

export default Fumantes;
