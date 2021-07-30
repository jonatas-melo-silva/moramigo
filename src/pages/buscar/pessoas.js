import api from '../../services/api';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import { useEffect, useState } from 'react';

import Layout from '../../components/Layout';
import Cards from '../../components/search/Cards';

import styles from '../../styles/pages/buscar-pessoas.module.css';

import { Paginacao } from '../../components/Paginacao';

const title = 'Moramigo | Buscar Pessoas';

const BuscarPessoas = () => {
  const [filtros, setFiltros] = useState({});
  const [perfis, setPerfis] = useState([]);
  const [bairros, setBairros] = useState([]);

  useEffect(() => {
    async function inicializar() {
      try {
        const url = 'busca/';
        const responsePerfils = await api.get(url, { params: filtros });
        const perfils = responsePerfils.data;

        const urlBairros = 'bairros/';
        const responseBairros = await api.get(urlBairros);
        const bairros = responseBairros.data;

        setPerfis(perfils);
        setBairros(bairros);
      } catch (error) {
        setPerfis(undefined);
      }
    }
    inicializar();
  }, [perfis]);

  const handleChange = event => {
    if (event.target.name == 'localidades' && event.target.value == '') {
      setFiltros([]);
    } else {
      setFiltros({ ...filtros, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const url = 'busca/';
    const response = await api.get(url, { params: filtros });
    setPerfis(response.data);
  };

  return (
    <Layout title={title}>
      <div className={styles.forms}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label id={styles.label}>Gênero</label>
            <select
              id={styles.select}
              name="genero_colega"
              onChange={handleChange}
              value={filtros.genero_colega || ''}
            >
              <option value="">Selecione</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
              <option value="O">Outro</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>Animais</label>
            <select
              id={styles.select}
              name="animais"
              onChange={handleChange}
              value={filtros.animais || ''}
            >
              <option value="">Selecione</option>
              <option value="S">Com animais</option>
              <option value="N">Sem animais</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>Visitas</label>
            <select
              id={styles.select}
              name="visitas"
              onChange={handleChange}
              value={filtros.visitas || ''}
            >
              <option value="">Selecione</option>
              <option value="S">Podem receber visitas</option>
              <option value="N">Sem receber visitas</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>Bebidas</label>
            <select
              id={styles.select}
              name="bebidas"
              onChange={handleChange}
              value={filtros.bebidas || ''}
            >
              <option value="">Selecione</option>
              <option value="S">Podem beber</option>
              <option value="N">Sem bebidas</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>Fumantes</label>
            <select
              id={styles.select}
              name="fumantes"
              onChange={handleChange}
              value={filtros.fumantes || ''}
            >
              <option value="">Selecione</option>
              <option value="S">Podem fumar</option>
              <option value="N">Sem Fumantes</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>Festas</label>
            <select
              id={styles.select}
              name="festas"
              onChange={handleChange}
              value={filtros.festas || ''}
            >
              <option value="">Selecione</option>
              <option value="S">Podem ter festa</option>
              <option value="N">Sem festas</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>localidades</label>
            <select
              id={styles.select}
              name="localidades"
              onChange={handleChange}
              value={filtros.localidades || ''}
            >
              <option value="">Selecione</option>
              {bairros &&
                bairros.map(local => (
                  <>
                    <option key={local.id} value={local.id}>
                      {local.nome}
                    </option>
                  </>
                ))}
            </select>
          </div>

          <button type="submit" className={styles.btnBuscarPessoas}>
            <FontAwesomeIcon icon="search" /> Buscar
          </button>
        </form>
      </div>
      {!perfis ? <h2>Carregando...</h2> : <Cards perfis={perfis} />}
      <Paginacao />
    </Layout>
  );
};

export default BuscarPessoas;
