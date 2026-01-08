import { Link } from "react-router-dom";
import "./Auth.css";
import logo from "../assets/clicksport_P&B.png";

export default function Login() {
  return (
    <main className="auth-page">
      <div className="auth-card">

        {/* LOGO */}
        <img src={logo} alt="ClickSports" className="auth-logo" />

        {/* TÍTULO */}
        <h1 className="auth-title">Entrar</h1>
        <p className="auth-subtitle">
          Acesse sua conta para continuar.
        </p>

        {/* LOGIN SOCIAL */}
        <button className="google-button">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
          />
          Entrar com Google
        </button>

        <div className="auth-divider">
          <span>ou</span>
        </div>

        {/* FORMULÁRIO */}
        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="seu@email.com" />
          </label>

          <label>
            Senha
            <input type="password" placeholder="••••••••" />
          </label>

          <button type="submit" className="auth-submit">
            Entrar
          </button>
        </form>

        {/* LINKS */}
        <div className="auth-links">
          <Link to="/register">Criar conta</Link>
          <Link to="#">Esqueci minha senha</Link>
        </div>

      </div>
    </main>
  );
}
