import React, { useState } from 'react';
import Select from 'react-select';
 
const Festas = () => {
    const data = [
      {
        value: 17,
        label: "Podem ter festa"
      },
      {
        value: 18,
        label: "Sem festas"
      },
      {
        value: 19,
        label: "Tanto faz ter festas"
      }
  
    ];
  
  const [valorSelecionado, setValorSelecionado] = useState([]);
   
  
  const handleChange = (e) => {
    setValorSelecionado(Array.isArray(e) ? e.map(x => x.value) : []);
  }
  
  
  return (
    <div className="Festas" style={{ width: 300 }}>
      <p>Festas</p>
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

export default Festas;