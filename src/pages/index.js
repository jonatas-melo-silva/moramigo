import { perfilFetch } from "../hooks/perfilFetch";
import {memo} from "react"

import  Layout  from "../components/Layout";
import  Banner  from "../components/home/Banner";
import  Cards  from "../components/search/Cards";

const title = "Moramigo";

const Home = () => {
  const { data } = perfilFetch("busca/");
  return (
    <Layout title={title}>
      <Banner/>
      <Cards perfis={data} />
    </Layout>
  );
};

export default memo(Home);
