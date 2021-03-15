import React, { useState } from 'react';
import Select from 'react-select';
 
function Genero() {
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
    <div className="Genero" style={{ width: 500 }}>
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
function Animais() {
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
    <div className="Animais" style={{ width: 500 }}>
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

function Visitas() {  
  const data = [
    {
      value: 8,
      label: "Podem receber visitas"
    },
    {
      value: 9,
      label: "Sem receber visitas"
    },
    {
      value: 10,
      label: "Tanto faz receber visitas"
    },
  ]

const [valorSelecionado, setValorSelecionado] = useState([]);
 

const handleChange = (e) => {
  setValorSelecionado(Array.isArray(e) ? e.map(x => x.value) : []);
}


return (
  <div className="Visitas" style={{ width: 500 }}>
    <p>Visitas</p>
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
function Bebidas() {
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
  <div className="Bebidas" style={{ width: 500 }}>
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
function Fumantes() {
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
  <div className="Fumantes" style={{ width: 500 }}>
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
function Festas() {
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
  <div className="Festas" style={{ width: 500 }}>
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
 
  

 
export {
  Genero,
  Animais,
  Visitas,
  Bebidas,
  Fumantes,
  Festas,
}