export type Pessoa = {
  pessoa: {
    id: number;
    nome: string;
    idade: number;
    foto: {
      imagem: string | undefined;
    }
  };
  valor_contribuicao: number;
  localidades: [
    {
      nome: string;
    }
  ];
};
