import React, { useState } from 'react';
import Select from 'react-select';
 

const Animais = () => {
    const data = [
      {
        value: 5,
        label: "Com animais"
      },
      {
        value: 6,
        label: "Sem animais"
      },
      {
        value: 7,
        label: "Tanto faz ter animais"
      }
    ]
   
    const [valorSelecionado, setValorSelecionado] = useState([]);
   
  
    const handleChange = (e) => {
      setValorSelecionado(Array.isArray(e) ? e.map(x => x.value) : []);
    }
    
   
    return (
      <div className="Animais" style={{ width: 300 }}>
        <p>Animais</p>
        <Select
          className="dropdown"
          placeholder="Selecione uma opção..."
          value={data.filter(obj => valorSelecionado.includes(obj.value))} 
          options={data} 
          onChange={handleChange} 
          isMulti
         
        />
    
        
   
        {valorSelecionado && <div style={{ marginTop: 20, lineHeight: '25px' }}>
          <div><b>Valores selecionados: </b> {JSON.stringify(valorSelecionado, null, 2)}</div> 
        </div>}
      </div>
    );
  }

export default Animais;