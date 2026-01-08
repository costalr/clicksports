import "./Footer.css";
import logo from "../assets/clicksport_P&B.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* MARCA */}
        <div className="footer-brand">
          <img src={logo} alt="ClickSports" className="logo" />
          <p>
            Desafios esportivos virtuais para correr no seu ritmo.
          </p>
        </div>

        {/* LINKS INSTITUCIONAIS */}
        <nav className="footer-links">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Gerenciar Preferências de Privacidade</a>
          <a href="#">Contato</a>
        </nav>

        {/* REDES SOCIAIS */}
        <div className="footer-social">
          <a href="#" aria-label="Instagram">
            📷
          </a>
          <a href="#" aria-label="WhatsApp">
            💬
          </a>
        </div>

      </div>

      {/* ÁREA INFERIOR (SEL0S / PAGAMENTOS – FUTURO) */}
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} ClickSport. Todos os direitos reservados.
        </span>

        {/* Placeholder para selos e cartões */}
        <div className="footer-payments">
          {/* Ícones de cartão / compra segura entram aqui depois */}
        </div>
      </div>
    </footer>
  );
}
