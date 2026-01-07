import { createContext, useContext, useState } from "react";

// Criação do contexto
const AuthContext = createContext();

// Usuário fake (mock)
const fakeUser = {
  id: 1,
  name: "Lara",
  email: "lara@clicksports.com"
};

// Provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // começa deslogado

  function login() {
    // simula login bem-sucedido
    setUser(fakeUser);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook auxiliar (boa prática)
export function useAuth() {
  return useContext(AuthContext);
}
