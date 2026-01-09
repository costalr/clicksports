import { useState, useMemo } from "react";
import "./ProductInfo.css";

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [zip, setZip] = useState("");
  const [installment, setInstallment] = useState(1);

  // gera parcelas dinamicamente (até 6x sem juros)
  const installments = useMemo(() => {
    const maxInstallments = 6;
    const price = product.price;

    return Array.from({ length: maxInstallments }, (_, i) => {
      const times = i + 1;
      return {
        times,
        value: (price / times).toFixed(2).replace(".", ","),
      };
    });
  }, [product.price]);

  return (
    <aside className="product-info">

      {/* META */}
      <span className="product-ref">
        Ref.: CPR3KNGF9 | Disponibilidade: Imediata
      </span>

      {/* TÍTULO */}
      <h1 className="product-title">{product.title}</h1>

      {/* AVALIAÇÕES */}
      <div className="product-rating">
        {"★".repeat(product.rating)}
        {"☆".repeat(5 - product.rating)}
        <span>({product.reviewsCount} avaliações)</span>
      </div>

      {/* PREÇO */}
      <div className="product-price">
        {product.oldPrice && (
          <span className="old">
            R$ {product.oldPrice.toFixed(2).replace(".", ",")}
          </span>
        )}

        <span className="current">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </span>

        {product.discount && (
          <span className="discount">-{product.discount}%</span>
        )}
      </div>

      <div className="installments">
        <select
          value={installment}
          onChange={(e) => setInstallment(Number(e.target.value))}
        >
          {installments.map(opt => (
            <option key={opt.times} value={opt.times}>
              {opt.times}x de R$ {opt.value} sem juros
            </option>
          ))}
        </select>
      </div>


      {/* QUANTIDADE */}
      <div className="product-quantity">
        <label>Quantidade</label>
        <div className="qty-controls">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>
      </div>

      {/* CTA */}
      <button className="buy-button">
        INSCREVA-SE
      </button>

      {/* BENEFÍCIO */}
      <p className="cashback">
        Ganhe <strong>5%</strong> de cashback
      </p>

      {/* FRETE */}
      <div className="shipping-box">
        <label>Simular frete</label>
        <div className="shipping-input">
          <input
            type="text"
            placeholder="Ex.: 00000-000"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          <button>OK</button>
        </div>
      </div>

    </aside>
  );
}
