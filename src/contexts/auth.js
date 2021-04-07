import api from '../services/api'

import { createContext, useState, useEffect , useContext } from "react";
import { useRouter } from 'next/router'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    async function loadStoreData() {
      const storageUser = await localStorage.getItem('@RNMoramigo:userData')
      const storageToken = await localStorage.getItem('@RNMoramigo:token')

      if (storageUser && storageToken) {
        api.defaults.headers.authorization = `Token ${storageToken}`
        setUser(JSON.parse(storageUser))
        router.push("/")
      }
    }
    loadStoreData()
  }, [])

  const logar = async ({ values }) => {
    try {
      const url = "login";
      const response = await api.post(url, values)
      const userData = {
        nome: response.data.nome,
        id: response.data.pessoa_id
      }
      setUser(userData)

      api.defaults.headers.authorization = `Token ${response.data.token}`

      await localStorage.setItem('@RNMoramigo:userData', JSON.stringify(userData));
      await localStorage.setItem('@RNMoramigo:token',response.data.token)

    } catch (err) {

    }
  }

  const logout = () => {
    localStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider
    value={{ logado: !!user, user, logar, logout }}
  >
    {children}
  </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context;
}
