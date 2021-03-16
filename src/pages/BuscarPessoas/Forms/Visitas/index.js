import { useState } from 'react';


const Visitas = () => {

  const [FormValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log('data', name, value);
    setFormValues({ ...FormValues, [name]: value });
  }

  return (
    <div>
     <label>Visitas</label>
    <select name="visitas" onChange={handleInputChange} value={FormValues.visitas || ''}>
      <option value="">Selecione</option>
      <option value="S">Podem receber visitas</option>
      <option value="N">Sem receber visitas</option>
      <option value="T">Tanto faz</option>
    </select>
    </div>

  );

}

export default Visitas;
