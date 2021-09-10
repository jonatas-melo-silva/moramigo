import { createContext, useState, useContext } from "react";

import axios from "axios";

import { useAuth } from "./AuthUserContext";

const InterestContext = createContext({});

export const InterestProvider = ({ children }) => {
  const [mensagem, setMensagem] = useState('')
  const [pendentes, setPendentes] = useState([]);
  const [confirmados, setConfirmados] = useState([]);

  const { authUser } = useAuth();

  const apiAuth = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL_PROD,
    headers: {
      Authorization: authUser?.token
    }
  });

  const verificarSolicitacao = async (id_destino) => {
    try {
      const url = "verificar-interesse/";
      const response = await apiAuth.get(url + id_destino);
      setMensagem(response.data.message)
    } catch (error) {
      console.error(error)
    }
  }

  const solicitar = async ( body ) => {
    try {
      const url = "interesses";
      const response = await apiAuth.post(url, body);
    } catch (err) {
      console.error(err);
    }
  };

  const aceitar = async ( id, body ) => {
    try {
      const url = "aceitar-interesse/";
      const response = await apiAuth.put(url + id, body);
    } catch (err) {
      console.error(err);
    }
  };

  const recusar = async ( id ) => {
    try {
      const url = "recusar-interesse/";
      const response = await apiAuth.delete(url + id);
    } catch (err) {
      console.error(err);
    }
  };

  const listarPendentes = async () => {
    try {
      const url = "interesses-pendentes";
      const response = await apiAuth.get(url);
      setPendentes(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const listarConfirmados = async () => {
    try {
      const url = "interesses-confirmados";
      const response = await apiAuth.get(url);
      setConfirmados(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <InterestContext.Provider
      value={{
        solicitar,
        aceitar,
        recusar,
        pendentes,
        confirmados,
        listarPendentes,
        listarConfirmados,
        verificarSolicitacao,
        mensagem,
      }}
    >
      {children}
    </InterestContext.Provider>
  );
};

export const useInterest = () => {
  const context = useContext(InterestContext);
  return context;
};
