import { createContext, useContext } from 'react';

import { useMoramigoAuth } from '../libs';

import { AuthUser } from '../types';

type AuthUserContext = {
  authUser: AuthUser | null;
  logged: boolean;
  loading: boolean;
  error: string | null;
  success: string | null;
  signIn: (username: string, password: string) => Promise<number>;
  signOut: () => void;
  signUp: (username: string, password: string) => void;
};

const AuthUserContext = createContext<AuthUserContext>({
  authUser: null,
  logged: false,
  loading: false,
  error: null,
  success: null,
  signIn: async () => { return null; },
  signOut: () => {},
  signUp: async () => {}
});

type Props = {
  children: React.ReactNode;
};

const AuthUserProvider: React.FC = ({ children }: Props) => {
  const { logged, authUser, loading, error, signIn, signOut, signUp, success } =
    useMoramigoAuth();

  return (
    <AuthUserContext.Provider
      value={{logged, authUser, loading, error, signIn, signOut, signUp, success }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserProvider;

export const useAuth = () => {
  const context = useContext(AuthUserContext) as AuthUserContext;
  if (!context) {
    throw new Error('useAuth deve ser usado em um AuthUserProvider');
  }
  return context;
};
