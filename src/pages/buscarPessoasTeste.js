import HeaderMain from "./../components/HederMain";
import CardsTeste from "../components/CardsTeste";
import Rodape from "../components/Rodape";
import api from "../services/api";

const BuscarPessoas = ({ perfilUsuarios }) => (
  <div>
    <HeaderMain />
    <CardsTeste perfilUsuarios={perfilUsuarios} />
    <Rodape />
  </div>
);

BuscarPessoas.getInitialProps = async () => {
  const url = "busca/";
  const response = await api.get(url, { params: { genero_colega: "" } });

  console.log(response.data);

  return { perfilUsuarios: response.data };
};

export default BuscarPessoas;