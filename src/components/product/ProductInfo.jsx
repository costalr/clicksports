// src/components/product/ProductInfo.jsx
import "./ProductInfo.css";

export default function ProductInfo({ product }) {
  return (
    <div className="product-info">

      <h1 className="product-title">{product.title}</h1>

      <div className="product-rating">
        {"★".repeat(product.rating)}
        {"☆".repeat(5 - product.rating)}
        <span>({product.reviewsCount} avaliações)</span>
      </div>

      <div className="product-price">
        {product.oldPrice && (
          <span className="old-price">
            R$ {product.oldPrice.toFixed(2)}
          </span>
        )}
        <span className="current-price">
          R$ {product.price.toFixed(2)}
        </span>
      </div>

      <button className="buy-button">
        Comprar
      </button>

    </div>
  );
}
