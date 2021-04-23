import { useAuth } from "./auth";

import axios from "axios";
import { createContext, useState, useContext } from "react";

const InterestContext = createContext({});

export const InterestProvider = ({ children }) => {
  const [mensagem, setMensagem] = useState('')
  const [pendentes, setPendentes] = useState([]);
  const [confirmados, setConfirmados] = useState([]);

  const { token } = useAuth();

  const apiAuth = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
    headers: {
      Authorization: token,
    },
  });

  const verificarSolicitacao = async (id_destino) => {
    console.log('interest')
    try {
      const url = "verificar-interesse/";
      const response = await apiAuth.get(url + id_destino);
      console.log(`verificar interesse ${response.status}`)
      setMensagem(response.data.message)
    } catch (error) {
      console.error(error)
    }
  }

  const solicitar = async ( body ) => {
    try {
      console.log(body)
      const url = "interesses";
      const response = await apiAuth.post(url, body);
      console.log(`solicitar interesse ${response.status}`);
    } catch (err) {
      console.error(err);
    }
  };

  const aceitar = async ( id, body ) => {
    try {
      await console.log(`aceitar: ${id} ${body}`);
      const url = "aceitar-interesse/";
      const response = await apiAuth.put(url + id, body);
      console.log(response.status);
    } catch (err) {
      console.error(err);
    }
  };

  const recusar = async ( id ) => {
    try {
      await console.log("recusar: "+id)
      const url = "recusar-interesse/";
      const response = await apiAuth.delete(url + id);
      console.log(response.status);
    } catch (err) {
      console.error(err);
    }
  };

  const listarPendentes = async () => {
    try {
      const url = "interesses-pendentes";
      const response = await apiAuth.get(url);
      console.log(response.status)
      setPendentes(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const listarConfirmados = async () => {
    try {
      const url = "interesses-confirmados";
      const response = await apiAuth.get(url);
      console.log(response.status)
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
