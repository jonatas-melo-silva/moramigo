import { Localidade } from '../types';

const formatLocality = (locality: Localidade) => ({
  id: locality.id,
  name: locality.nome
});

export default formatLocality;
