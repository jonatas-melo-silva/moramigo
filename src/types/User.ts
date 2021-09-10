export type User = {
  pessoa_id: number;
  nome: string;
  foto: {
    imagem: string | undefined;
  };
  token: string;
};