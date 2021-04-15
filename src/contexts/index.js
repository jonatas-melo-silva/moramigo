import { AuthProvider } from "./auth";
import { InterestProvider } from "./interest";

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <InterestProvider>{children}</InterestProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
