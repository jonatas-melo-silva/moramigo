import api from '../services/api'

import { createContext, useState, useEffect , useContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    async function loadStoreData() {
      const storageUser = await localStorage.getItem('@RNMoramigo:userData')
      const storageToken = await localStorage.getItem('@RNMoramigo:token')

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser))
        setToken(storageToken)
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

      const Token = `Token ${response.data.token}`
      setToken(Token)

      await localStorage.setItem('@RNMoramigo:userData', JSON.stringify(userData));
      await localStorage.setItem('@RNMoramigo:token',Token)

      return response.status
    } catch (err) {
      console.error(err);
    }
  }

  const logout = () => {
    localStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider
    value={{ logado: !!user, user, logar, logout, token }}
  >
    {children}
  </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context;
}
