// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { AuthProvider } from "./context/AuthContext"; // 👈 ADICIONADO
import "./App.css";

/**
 * Retorna o tema inicial da aplicação.
 * Prioridade:
 * 1. localStorage
 * 2. Tema do sistema operacional
 */
function getInitialTheme() {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  /**
   * Persiste o tema escolhido
   */
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <AuthProvider> {/* 👈 CONTEXTO DE AUTENTICAÇÃO */}
      <BrowserRouter>
        <div className={`app ${theme}`}>
          
          {/* Navbar global */}
          <Navbar theme={theme} setTheme={setTheme} />

          {/* Rotas da aplicação */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>

        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
