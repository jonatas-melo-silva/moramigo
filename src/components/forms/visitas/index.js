import { useState } from 'react';
import Select from 'react-select';

const Visitas = () => {
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
    <div className="Visitas" style={{ width: 300 }}>
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

export default Visitas;
