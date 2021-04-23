import { Cards } from "../../components/search/Cards"
import Layout from "../../components/Layout"

import { perfilFetch } from '../../hooks/perfilFetch'

const BuscarPessoas = () => {
  const { data } = perfilFetch('busca/')

  if (!data)
    console.log('carregando buscar | servidor')
  else
    console.log(data)

  return (
    <Layout>
      {!data ? (
        <p>Carregando...</p>
        ) : (
        <Cards perfis={data}/>
      )}
    </Layout>
  )
}

export default BuscarPessoas;
