import React, { memo, useEffect, useState } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import api from '../../../services/api';

import { Default } from '../../Layout';
import { SearchList, Pagination } from '../../modules';

import { useLocalities } from '../../../contexts/LocalitiesContext';

import { Person } from '../../../types/Person';
import formatPerson from '../../../libs/formatPerson'

import styles from './styles.module.css';

const title = 'Moramigo | Buscar Pessoas';

const SearchPersons: React.FC = () => {
  const { localities, fetchLocalities} = useLocalities();
  const [persons, setPersons] = useState<Person[]>([]);
  const [filtros, setFiltros] = useState({} as any);

  useEffect(() => {
    async function inicializar() {
      try {
        const url = 'busca/';
        const response = await api.get(url, { params: filtros });
        const persons = response.data.map(formatPerson);

        await fetchLocalities();

        setPersons(persons);
      } catch (error) {
        setPersons(undefined);
      }
    }
    inicializar();
  }, []);

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
    const persons = response.data.map(formatPerson);

    setPersons(persons);
  };
  return (
    <Default title={title}>
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
            <label id={styles.label}>Localidades</label>
            <select
              id={styles.select}
              name="localidades"
              onChange={handleChange}
              value={filtros.localidades || ''}
            >
              <option value="">Selecione</option>
              {localities &&
                localities.map((locality) => (
                  <>
                    <option key={locality.name} value={locality.id}>
                      {locality.name}
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
      {!persons ? <h2>Carregando...</h2> : <SearchList persons={persons} />}
      <Pagination />
    </Default>
  );
};

export default memo(SearchPersons);
