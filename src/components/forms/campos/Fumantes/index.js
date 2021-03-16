import React, { useState } from 'react';
import Select from 'react-select';
 
const Fumantes = () => {
    const data = [
      {
        value: 14,
        label: "Podem fumar"
      },
      {
        value: 15,
        label: "Sem fumantes"
      },
      {
        value: 16,
        label: "Tanto faz ter fumantes"
      }
    ]
  
  const [valorSelecionado, setValorSelecionado] = useState([]);
   
  
  const handleChange = (e) => {
    setValorSelecionado(Array.isArray(e) ? e.map(x => x.value) : []);
  }
  
  
  return (
    <div className="Fumantes" style={{ width: 300 }}>
      <p>Fumantes</p>
      <Select
        className="dropdown"
        placeholder="Selecione uma opção..."
        value={data.filter(obj => valorSelecionado.includes(obj.value))} 
        options={data}
        onChange={handleChange} 
        isMulti
       
      />
  
      
  
      {valorSelecionado && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        {/* <div><b>Valores selecionados: </b> {JSON.stringify(valorSelecionado, null, 2)}</div> */}
      </div>}
    </div>
  );
  }
export default Fumantes;