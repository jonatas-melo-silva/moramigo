import { InterestProvider } from './interest';
import PersonsProvider from './PersonsContext';
import LocalitiesProvider from './LocalitiesContext';
import AuthUserProvider from './AuthUserContext';

const ContextProvider = ({ children }) => {
  return (
    <PersonsProvider>
      <LocalitiesProvider>
        <AuthUserProvider>
            <InterestProvider>{children}</InterestProvider>
        </AuthUserProvider>
      </LocalitiesProvider>
    </PersonsProvider>
  );
};

export default ContextProvider;
