import { Pessoa } from '../types';

const formatPerson = (person: Pessoa) => ({
  id: person.pessoa.id,
  name: person.pessoa.nome,
  avatar: person.pessoa.foto?.imagem,
  age: person.pessoa.idade,
  contributionValue: person.valor_contribuicao,
  localities: person.localidades.map(locality => locality.nome)
});

export default formatPerson
