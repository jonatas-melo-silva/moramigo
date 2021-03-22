import { useState } from 'react';

import styles from '../styles/components/pages/BuscarPessoas.module.css';
import HeaderBuscarPessoas from '../components/HeaderBuscarPessoas';
import Rodape from '../components/Rodape';
import Cards from '../components/Cards';
import api from '../services/api'
import HeaderMain from './../components/HederMain';
const BuscarPessoas = () => {

  const [filtros, setFiltros] = useState({})
  const [perfils, setPerfils] = useState([])

  const handleChange = (event) => {
    setFiltros({ ...filtros, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const url = "busca/"
    api.get(url, filtros).then(response => {
      setPerfils(response.data)
    })
  }

  return (
    <>
      { console.log( filtros)}
      <HeaderMain/>
      {/* <HeaderBuscarPessoas /> */}
      <div className={styles.forms}>
        <form className={styles.form} onSubmit={handleSubmit}>

          <div>
            <label id={styles.label}>Gênero</label>
            <select id={styles.select} name="genero_colega" onChange={handleChange} value={filtros.genero_colega || ''}>
              <option value="">Selecione</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
              <option value="O">Outro</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>Animais</label>
            <select id={styles.select} name="animais" onChange={handleChange} value={filtros.animais || ''}>
              <option value="">Selecione</option>
              <option value="S">Com animais</option>
              <option value="N">Sem animais</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>Visitas</label>
            <select id={styles.select} name="visitas" onChange={handleChange} value={filtros.visitas || ''}>
              <option value="">Selecione</option>
              <option value="S">Podem receber visitas</option>
              <option value="N">Sem receber visitas</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>Bebidas</label>
            <select id={styles.select} name="bebidas" onChange={handleChange} value={filtros.bebidas || ''}>
              <option value="">Selecione</option>
              <option value="S">Podem beber</option>
              <option value="N">Sem bebidas</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>Fumantes</label>
            <select id={styles.select} name="fumantes" onChange={handleChange} value={filtros.fumantes || ''}>
              <option value="">Selecione</option>
              <option value="S">Podem fumar</option>
              <option value="N">Sem Fumantes</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>Festas</label>
            <select id={styles.select} name="festas" onChange={handleChange} value={filtros.festas || ''}>
              <option value="">Selecione</option>
              <option value="S">Podem ter festa</option>
              <option value="N">Sem festas</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>localidades</label>
            <select id={styles.select} name="Localidades" onChange={handleChange} value={filtros.localidades || ''}>
              <option value="">Selecione</option>
              <option value="1">Bernado Viera</option>
              <option value="2">Bairro Vermelho</option>
              <option value="3">Tirol</option>
            </select>
          </div>

          <button type="submit" className={styles.btnBuscarPessoas}>Buscar</button>
        </form>
      </div>
  
      <Cards usuarios={perfils}/>
      <Rodape />
    </>
  );
}

export default BuscarPessoas;
