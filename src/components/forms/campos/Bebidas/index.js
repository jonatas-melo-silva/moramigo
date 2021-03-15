import React, { useState } from 'react';
import Select from 'react-select';
 

const Bebidas = () => {
    const data = [
      {
        value: 11,
        label: "Podem beber"
      },
      {
        value: 12,
        label: "Sem bebidas"
      },
      {
        value: 13,
        label: "Tanto faz ter bebidas"
      }
    ]
  
  const [valorSelecionado, setValorSelecionado] = useState([]);
   
  
  const handleChange = (e) => {
    setValorSelecionado(Array.isArray(e) ? e.map(x => x.value) : []);
  }
  
  
  return (
    <div className="Bebidas" style={{ width: 300 }}>
      <p>Bebidas</p>
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
  
export default Bebidas;