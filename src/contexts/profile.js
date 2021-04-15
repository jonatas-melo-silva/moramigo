import api from "../services/api"
import { useAuth } from "../contexts/auth";

import { createContext, useState , useContext, useEffect } from "react";

const ProfileContext = createContext({})

export const ProfileProvider = ({ children}) => {
  const [profile, setProfile] = useState()
  const { logado, user } = useAuth();

  useEffect(() => {
    async function loadStoreData() {
      const storageUser = await localStorage.getItem('@RNMoramigo:userData')

      if (logado) {
        const User = JSON.parse(storageUser)
        verPerfil(User.id)
      }
    }
    loadStoreData()
  }, [logado])

  const verPerfil = async (id) => {
    try {
      const url = "pessoas/";
      const response = await api.get(url + id);
      console.log(response.data)
      setProfile(response.data)
    } catch (err) {}
  }

  return (
    <ProfileContext.Provider
      value={{profile, verPerfil}}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => {
  const context = useContext(ProfileContext)
  return context;
}
