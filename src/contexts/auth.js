import api from '../services/api'

import { createContext, useState, useEffect } from "react";
import { useRouter } from 'next/router'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const router = useRouter()

  useEffect(() => {
    async function loadStoreData() {
      const storageNome = await localStorage.getItem('@RNAuth:nome')
      const storageId = await localStorage.getItem('@RNAuth:id')
      const storageToken = await localStorage.getItem('@RNAuth:token')

      if (storageNome && storageId && storageToken) {
        const data = {
          nome: storageNome,
          pessoa_1: storageId,
          token: storageToken,
        }
        setUser(data)
        router.push("/")
      }
    }
    loadStoreData()
  }, [])

  const logar = async ({ values }) => {
    const url = "login";
    const response = await api.post(url, values)
    setUser(response.data)

    await localStorage.setItem('@RNAuth:nome', response.data.nome)
    await localStorage.setItem('@RNAuth:id',response.data.pessoa_1)
    await localStorage.setItem('@RNAuth:token',response.data.token)

  }

  const logout = () => {
    localStorage.clear()
    setUser({})
  }

  return (
    <AuthContext.Provider
    value={{ logado: !!user.token, user, logar, logout }}
  >
    {children}
  </AuthContext.Provider>
  )
}

export default AuthContext;
