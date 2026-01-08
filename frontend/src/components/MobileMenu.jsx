import "./MobileMenu.css";

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <aside className="mobile-menu" onClick={(e) => e.stopPropagation()}>

        {/* Cabeçalho */}
        <div className="mobile-menu-header">
          <span>Menu</span>
          <button onClick={onClose}>✕</button>
        </div>

        {/* Navegação principal */}
        <nav className="mobile-menu-links">
          <a href="#">Home</a>
          <a href="#">Eventos</a>
          <a href="#">Loja</a>
          <a href="#">Comunidade</a>
          <a href="#">Info</a>
          <a href="#">Ajuda</a>
        </nav>

      </aside>
    </div>
  );
}
