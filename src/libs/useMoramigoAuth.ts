import { useEffect, useState } from 'react';

import api from '../services/api';

import { formatAuthUser } from './';

import { AuthUser } from '../types';

const useMoramigoAuth = () => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const authStateChange = (storageAuthUser: string) => {
    if (!storageAuthUser) {
      setAuthUser(null);
      setError(null);
      setSuccess(null);
      return;
    }

    const authUser: AuthUser = JSON.parse(storageAuthUser);
    setAuthUser(authUser);
    setError(null);
    setSuccess(`Bem vindo, ${authUser.name}!!`);
  };

  const signIn = async (username: string, password: string) => {
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const response = await api.post('login', {
        username,
        password
      });

      const authUser: AuthUser = formatAuthUser(response.data);

      setAuthUser(authUser);
      localStorage.setItem('@Moramigo:authUser', JSON.stringify(authUser));

      setSuccess('Login realizado com sucesso!');
      setError(null);
      setLoading(false);
      return response.status;
    } catch (err) {
      setError('Impossível fazer login com as credenciais fornecidas!');
      setSuccess(null);
      setLoading(false);
      return 400;
    }
  };

  const signOut = () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      localStorage.removeItem('@Moramigo:authUser');
      setAuthUser(null);
      setSuccess('Logout realizado com sucesso!');
      setError(null);
      setLoading(false);
    } catch (err) {
      setError('Não foi possível realizar o logout!');
      setSuccess(null);
      setLoading(false);
    }
  };

  const signUp = async (username: string, password: string) => {
    // TODO: implement sign up
  };

  useEffect(() => {
    const storageAuthUser = localStorage.getItem('@Moramigo:authUser');

    return authStateChange(storageAuthUser);
  }, []);

  return {logged: !!authUser, authUser, signIn, signOut, signUp, loading, error, success };
};

export default useMoramigoAuth;
