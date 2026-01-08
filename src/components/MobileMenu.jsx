import "./MobileMenu.css";
import { Link } from "react-router-dom";

export default function MobileMenu({ open, onClose, user }) {
  if (!open) return null;

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <aside
        className="mobile-menu"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="mobile-menu-header">
          <span>Menu</span>
          <button onClick={onClose}>✕</button>
        </div>

        {/* ===== USUÁRIO LOGADO ===== */}
        {user && (
          <div className="mobile-menu-user">
            <img
              src={user.avatar}
              alt={user.name}
              className="mobile-menu-avatar"
            />
            <strong>{user.name}</strong>
            <span>{user.email}</span>
          </div>
        )}

        {/* ===== NAVEGAÇÃO ===== */}
        <nav className="mobile-menu-links">
          {user && <Link to="/athlete">Área do atleta</Link>}
          <Link to="/shop">Loja</Link>
          <Link to="/help">Ajuda</Link>
          <Link to="/contact">Contato</Link>
        </nav>
      </aside>
    </div>
  );
}
