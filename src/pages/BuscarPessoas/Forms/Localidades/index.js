import { useState } from 'react';


const Localidades = () => {

  const [FormValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log('data', name, value);
    setFormValues({ ...FormValues, [name]: value });
  }

  return (
    <div>
    <label>Localidades</label>
    <select name="Localidades" onChange={handleInputChange} value={FormValues.Localidades || ''}>
      <option value="">Selecione</option>
      <option value="S">Bernado Viera</option>
      <option value="N">Bairro Vermelho</option>
      <option value="T">Tirol</option>
    </select>
    </div>
  );

}

export default Localidades;
