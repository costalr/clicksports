import "./MobileProfilePanel.css";
import { Link } from "react-router-dom";

export default function MobileProfilePanel({ open, onClose, user, onLogout }) {
  if (!open) return null;

  return (
    <div className="profile-panel-overlay">
      <div className="profile-panel">

        {/* HEADER */}
        <button onClick={onClose}>✕</button>

        {user ? (
          <>
            <div className="profile-panel-header">
              <img
                src={user.avatar}
                alt={user.name}
                className="profile-avatar"
              />
              <div>
                <strong>{user.name}</strong>
                <div>{user.email}</div>
              </div>
            </div>

            <nav className="profile-panel-links">
              <Link to="/profile" onClick={onClose}>Meu perfil</Link>
              <Link to="/orders" onClick={onClose}>Meus pedidos</Link>
              <button className="logout" onClick={onLogout}>Sair</button>
            </nav>
          </>
        ) : (
          <nav className="profile-panel-links">
            <Link to="/login" onClick={onClose}>Entrar</Link>
            <Link to="/register" onClick={onClose}>Criar conta</Link>
          </nav>
        )}

      </div>
    </div>
  );
}
