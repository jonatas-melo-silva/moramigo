export type Perfil = {
  user: {
    username: string;
    password: string;
  },
  restricoes: {
    valor_contribuicao: number;
    genero_colega: string;
    animais: string;
    visitas: string;
    bebidas: string;
    fumantes: string;
    festas: string;
    localidades: number[]
  },
  nome: string;
  descricao: string;
  data_nascimento: string;
  email: string;
  ocupacao: string;
  genero: string;
};
