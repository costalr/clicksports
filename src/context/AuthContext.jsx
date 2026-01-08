import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// 👇 usuário fake centralizado
const fakeUser = {
  id: 1,
  name: "Lara Carolina",
  email: "lara@clicksports.com",
  avatar: "https://i.pravatar.cc/150"
};

export function AuthProvider({ children }) {

  // 🔥 MODO DEV: começa logado
  const [user, setUser] = useState(fakeUser);
  // depois você troca para: useState(null)

  function login() {
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

export function useAuth() {
  return useContext(AuthContext);
}
