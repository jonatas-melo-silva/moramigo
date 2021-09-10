import { User } from "../types";

const formatAuthUser = (user: User) => ({
  id: user.pessoa_id,
  name: user.nome,
  token: `Token ${user.token}`,
  avatar: user.foto?.imagem
});

export default formatAuthUser;
