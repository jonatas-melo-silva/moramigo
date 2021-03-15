import React, { useState } from 'react';
import Select from 'react-select';
 

const Genero = () => {
    const data = [
      {
        value: 1,
        label: "Masculino"
      },
      {
        value: 2,
        label: "Feminino"
      },
      {
        value: 3,
        label: "Outro"
      },
      {
        value: 4,
        label: "Tanto faz"
      }
    ]
    
    const [valorSelecionado, setValorSelecionado] = useState([]);
   
    
    const handleChange = (e) => {
      setValorSelecionado(Array.isArray(e) ? e.map(x => x.value) : []);
    }
   
    return (
      <div className="Genero" style={{ width: 300 }}>
        <p>Gênero</p>
        
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

export default Genero;