import { useState, useEffect } from "react";
import "./ProductQuickBuyModal.css";

export default function ProductQuickBuyModal({
  open,
  onClose,
  product,
  onAddToCart
}) {
  // Estados locais do modal
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");

  /**
   * Sempre que o modal abrir OU o produto mudar,
   * resetamos os estados para evitar "lixo" de uso anterior
   */
  useEffect(() => {
    if (open) {
      setQuantity(1);
      setSelectedOption("");
    }
  }, [open, product]);

  // Se não estiver aberto, não renderiza nada
  if (!open) return null;

  function handleAdd() {
    onAddToCart({
      productId: product.id,
      quantity,
      option: selectedOption || null
    });
    onClose();
  }

  return (
    <div className="quickbuy-overlay" onClick={onClose}>
      <div
        className="quickbuy-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="quickbuy-header">
          <h2>Adicionar ao carrinho</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* PRODUTO */}
        <div className="quickbuy-product">
          <img src={product.image} alt={product.name} />
          <div>
            <p className="quickbuy-product-name">{product.title}</p>
            <div className="price">
              {product.oldPrice && (
                <span className="old">
                  R$ {product.oldPrice.toFixed(2).replace(".", ",")}
                </span>
              )}
              <span className="current">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </span>
            </div>
          </div>
        </div>

        {/* OPÇÕES (se existirem) */}
        {product.options && (
          <div className="quickbuy-options">
            <label>Selecione uma opção</label>
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">Selecionar…</option>
              {product.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* QUANTIDADE */}
        <div className="quickbuy-quantity">
          <label>Quantidade</label>
          <div className="qty-controls">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>
              −
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>
              +
            </button>
          </div>
        </div>

        {/* AÇÕES */}
        <div className="quickbuy-actions">
          <button className="secondary" onClick={onClose}>
            Voltar
          </button>
          <button
            className="primary"
            onClick={handleAdd}
            disabled={product.options && !selectedOption}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
