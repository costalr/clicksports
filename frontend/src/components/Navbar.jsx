import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/clicksport_P&B.png";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MobileProfilePanel from "./MobileProfilePanel";


export default function Navbar({ theme, setTheme }) {
    const [profileOpen, setProfileOpen] = useState(false); 
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    function toggleTheme() {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
    }

  return (
    <>
      <header className="navbar">
  <div className="navbar-container">

    {/* MOBILE ESQUERDA */}
    <div className="navbar-mobile-left">
      <button
        className="menu-toggle"
        aria-label="Abrir menu"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </button>
    </div>

    {/* LOGO CENTRAL */}
   <div className="navbar-mobile-center">
    <Link to="/">
        <img src={logo} alt="ClickSports" className="logo" />
    </Link>
    </div>


   

    {/* MOBILE DIREITA */}
   <div className="navbar-mobile-right">
    <Link to="/cart" className="icon-button">🛒</Link>
   

        <button
        className="icon-button"
        aria-label="Perfil"
        onClick={() => {
            console.log("Avatar mobile clicado");
            setProfileOpen(true);
        }}
        >
        👤
        </button>
    </div>


        {/* DESKTOP */}
        <nav className="navbar-left-group desktop-only">
            <Link to="/">
                <img src={logo} alt="ClickSports" className="logo" />
            </Link>

            <nav className="navbar-links">
                <a href="#">Eventos</a>
                <a href="#">Como funciona</a>
                <a href="#">Contato</a>
            </nav>
        </nav>

        <nav className="navbar-right desktop-only">

        {/* PERFIL ou LOGIN/CADASTRO */}
        {user ? (
            <div className="profile-wrapper">
            <button
                className="icon-button"
                aria-label="Perfil"
                onClick={() => setProfileOpen(prev => !prev)}
            >
                👤
            </button>

            <div className={`profile-menu ${profileOpen ? "open" : ""}`}>
                <Link to="/profile">Meu perfil</Link>
                <Link to="/orders">Meus pedidos</Link>
                <button onClick={logout} className="logout">Sair</button>
            </div>
            </div>
        ) : (
            <>
            <Link to="/login" className="login">Entrar</Link>
            <Link to="/register" className="signup">Criar conta</Link>
            </>
        )}

        {/* CARRINHO — SEMPRE */}
        <Link to="/cart" className="icon-button" aria-label="Carrinho">
            🛒
        </Link>

        {/* BUSCA — SEMPRE */}
        <button className="icon-button" aria-label="Pesquisar">
            🔍
        </button>

        {/* TEMA — SEMPRE */}
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Alterar tema"
        >
            {theme === "dark" ? "☀️" : "🌙"}
        </button>

        </nav>

  </div>
</header>


     {/* MENU LATERAL (☰) */}
    <MobileMenu
    open={menuOpen}
    onClose={() => setMenuOpen(false)}
    user={user}
    />

    {/* PAINEL DE PERFIL (👤) */}
    <MobileProfilePanel
    open={profileOpen}
    onClose={() => setProfileOpen(false)}
    user={user}
    onLogout={logout}
    />



        </>
    );
}
