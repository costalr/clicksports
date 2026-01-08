import { Link } from "react-router-dom";
import "./MobileSideMenu.css";

export default function MobileSideMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="mobile-overlay" onClick={onClose}>
      <aside
        className="mobile-side-menu"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="menu-header">
          <button onClick={onClose}>✕</button>
        </header>

        <nav className="menu-links">
          <Link to="/athlete">Área do atleta</Link>
          <Link to="/events">Eventos</Link>
          <Link to="/help">Contato / Ajuda</Link>
        </nav>
      </aside>
    </div>
  );
}
