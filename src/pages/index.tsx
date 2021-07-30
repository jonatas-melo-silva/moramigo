import { memo, useEffect, useState } from 'react';
import api from '../services/api';
import Layout from '../components/Layout';
import Banner from '../components/home/Banner';
import Cards from '../components/search/Cards';
import InforHome from '../components/home/InforHome';
import TextContainer from '../components/home/TextContainer';
import { Paginacao } from '../components/Paginacao';

const title = 'Moramigo';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function inicializar() {
      try {
        const url = 'busca/';
        const responsePerfils = await api.get(url);
        setData(responsePerfils.data);
      } catch (error) {
        setData(undefined);
      }
    }
    inicializar();
  }, []);

  return (
    <Layout title={title}>
      <Banner />
      <InforHome />
      <TextContainer />
      <Cards perfis={data} />
      <Paginacao />
    </Layout>
  );
};

export default memo(Home);
