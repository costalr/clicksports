import { Link } from "react-router-dom";
import "./Auth.css";
import logo from "../assets/clicksport_P&B.png";

export default function Register() {
  return (
    <main className="auth-page">
      <div className="auth-card">

        {/* LOGO */}
        <img src={logo} alt="ClickSports" className="auth-logo" />

        {/* TÍTULO */}
        <h1 className="auth-title">Criar conta</h1>
        <p className="auth-subtitle">
          Crie sua conta para participar dos desafios e receber seus kits.
        </p>

        {/* LOGIN SOCIAL */}
        <button className="google-button">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
          />
          Criar conta com Google
        </button>

        <div className="auth-divider">
          <span>ou crie com email</span>
        </div>

        {/* FORMULÁRIO */}
        <form className="auth-form">
          <label>
            Nome completo
            <input type="text" placeholder="Seu nome" />
          </label>

          <label>
            Email
            <input type="email" placeholder="seu@email.com" />
          </label>

          <label>
            Senha
            <input type="password" placeholder="Crie uma senha segura" />
          </label>

          <label>
            Confirmar senha
            <input type="password" placeholder="Repita a senha" />
          </label>

          {/* TERMOS */}
          <div className="auth-checkbox">
            <input type="checkbox" id="terms" />

            <label htmlFor="terms">
                Li e aceito os <a href="#">Termos de Uso</a> e a{" "}
                <a href="#">Política de Privacidade</a>
            </label>
            </div>

          <button type="submit" className="auth-submit">
            Criar conta
          </button>
        </form>

        {/* LINK LOGIN */}
        <div className="auth-links2">
          <Link to="/login">Já tenho conta</Link>
        </div>

      </div>
    </main>
  );
}
