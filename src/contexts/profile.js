import api from '../services/api';

import { useAuth } from './AuthUserContext';

import { createContext, useState, useContext, useEffect } from 'react';

const ProfileContext = createContext({});

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState();
  const { logged } = useAuth();

  useEffect(() => {
    async function loadStoreData() {
      const localUserData = await localStorage.getItem(
        '@RNMoramigo:localUserData'
      );

      if (logged) {
        const userData = JSON.parse(localUserData);
        verPerfil(userData.id);
      }
    }
    loadStoreData();
  }, [logged]);

  const verPerfil = async id => {
    try {
      const url = `pessoas/${id}`;
      const response = await api.get(url);
      setProfile(response.data);
    } catch (err) {}
  };

  return (
    <ProfileContext.Provider value={{ profile, verPerfil }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  return context;
};
