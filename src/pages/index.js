import { perfilFetch } from "../hooks/perfilFetch";
import {memo} from "react"

import  Layout  from "../components/Layout";
import  Banner  from "../components/home/Banner";
import  Cards  from "../components/search/Cards";
import InforHome from "../components/home/InforHome";
import TextContainer from "../components/home/TextContainer";
import { Paginacao } from "../components/Paginacao";

const title = "Moramigo";

const Home = () => {
  const { data } = perfilFetch("busca/");
  return (
    <Layout title={title}>
      <Banner/>
      <InforHome/>
      <TextContainer/>
      <Cards perfis={data} />
      <Paginacao/>

    </Layout>
  );
};

export default memo(Home);
