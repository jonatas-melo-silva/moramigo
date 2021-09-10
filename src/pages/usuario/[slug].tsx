import { useRouter } from 'next/router';

import api from '../../services/api';

import { useAuth } from '../../contexts/AuthUserContext';

import { decodeId, encodeId } from '../../libs';

import { MyProfile } from '../../components/templates';
import NotFound from '../404';

const MeuPerfil = ({ User = null }) => {
  const { authUser, logged } = useAuth();
  const router = useRouter();
  const slug = String(router.query.slug);
  const array = slug.split('-');
  const id = array[array.length - 1];

  const validationId = async id => {
    const { data } = await api.get(`pessoas/${decodeId(id)}`);
    if (data) {
      return data;
    } else {
      return null;
    }
  };

  if (!validationId(id)) {
    return <NotFound />;
  }

  if (logged && authUser.id !== User.id) {
    return <NotFound />;
  }

  if (!User) {
    return <NotFound />;
  }

  return <MyProfile User={User} />;
};

export async function getStaticProps(context: { params: { slug: string } }) {
  try {
    const url = 'pessoas/';
    const { slug } = context.params;
    const array = slug.split('-');
    const id = array[array.length - 1];
    // const [, id] = slug.split('-');
    const response = await api.get(url + decodeId(id));
    const User = await response.data;
    return {
      props: { User, revalidate: 60 * 60 * 24 } //1 day
    };
  } catch (error) {
    console.error(error);
  }
}

export async function getStaticPaths() {
  try {
    const url = 'pessoas/';
    const response = await api.get(url);
    const users = await response.data.slice(0, 5);
    const paths = users.map(user => {
      return { params: { slug: `${user.nome}-${encodeId(user.id)}` } };
    });
    return {
      paths: paths,
      fallback: 'blocking'
    };
  } catch (error) {
    console.error(error);
  }
}

export default MeuPerfil;
