import Head from '../Head'
import Header from '../Header'
import Rodape from '../Rodape'

const Layout = ({ children, title }) => {

  return (
    <>
      <Head title={title} />
      <Header/>
      <main>{children}</main>
      <Rodape/>
    </>
  )
}

export default Layout
