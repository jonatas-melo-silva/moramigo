
import * as yup from 'yup';


export const schema = yup.object().shape({
  email: yup
    .string()
    .required('O e-mail é obrigatorio')
    .email('Insira um e-mail válido')
    .matches(/^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/,'O email que você inseriu não corresponde a um endereço valido'),

  password: yup
    .string()
    .required('A senha é obrigatorio')
    .min(8, 'A senha é muito curta - deve ter no mínimo 8 caracteres.')
    .matches(/[a-zA-Z]/, 'A senha só pode conter letras latinas'),
  username: yup
    .string()
    .required('Nome é obrigatorio')
    .min(3, 'O nome de usuário deve ter pelo menos 3 caracteres ')
    .max(12, 'Seu username  deve ter no maximo 12 caracteres')
    .matches(/[a-zA-Z]/, 'O username precisa conter letrar latinas'),


  descricao: yup
    .string()
    // .required('Descricao é obrigatorio')
    .max(100, 'A descrição deve ter no maximo 100 caracteres'),
    // .min(20, 'A descrição precisa ter no minimo 20 caracteres')
    //.matches(/[a-zA-Z]/,'A descrição precisa conter letrar latinas'),


  nome: yup
    .string()
    .required('Nome é obrigatorio')
    .min(3, 'O nome de usuário deve ter pelo menos 3 caracteres ')
    .max(12, 'Seu nome  deve ter no maximo 12 caracteres')
    .matches(/[a-zA-Z]/, 'O nome precisa conter letrar latinas'),


  data_nascimento: yup.string().required('Data de nascimento é obrigatorio'),

  ocupacao: yup
    .string()
    .required('Ocupação é obrigatorio')
    .min(4, 'A ocupação no minimo deve ter 3 caracteres')
    .max(40, 'A ocupaçao deve ter no maximo 40 caracteres')
    .matches(/[a-zA-Z]/, 'O nome precisa conter letrar latinas'),

  genero: yup.string().required('Gênero é obrigatorio'),

  localidades: yup
    .array()
    .nullable()
    .required('Localidades é obrigatorio')
    .min(1, 'Localidades deve ter pelo menos 1 bairro')
    .max(3, 'Voce so pode selecionar no maximo 3 bairros'),


  valor_contribuicao: yup.string().required('Valor contribuição é obrigatorio')
    .max(6, 'O valor da contribuição deve ter no maximo 6 números'),

  animais: yup.string().required('Campo de animais é obrigatorio'),

  bebidas: yup.string().required('Campo de bebidas é obrigatorio'),

  fumantes: yup.string().required('Campo de fumantes é obrigatorio'),

  visitas: yup.string().required('Campo de visitas é obrigatorio'),

  festas: yup.string().required('Campo de festa é obrigatorio'),

  genero_colega: yup.string().required('Campo de genero colegas é obrigatorio')
});



