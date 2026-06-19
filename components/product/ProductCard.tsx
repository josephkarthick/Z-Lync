"use client";
import Link from "next/link";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    images?: string[];
    weight: string;
    price: number;
  };

  setSelectedProduct: (product: any) => void;
  onAddToCart: (product: any) => void;
}

export default function ProductCard({
  product,
  setSelectedProduct,
  onAddToCart,
}: ProductCardProps) {
  const productImage =
    product.images?.[0] ||
    "/assets/images/no-image.png";

  return (
    <div className="product-box product-white-bg wow fadeIn">
      <div className="product-image">
        <Link href={`/product/${product.id}`}>
          <img
            src={productImage}
            className="img-fluid blur-up lazyload"
            alt={product.name}
          />
        </Link>
      </div>

      <div className="product-detail position-relative">
        <Link href={`/product/${product.id}`}>
          <h6 className="name">{product.name}</h6>
        </Link>

        <h6 className="sold weight text-content fw-normal">
          {product.weight}
        </h6>

        <h6 className="price theme-color">
          ₹ {product.price}
        </h6>

        {/* Quick View */}
        <div className="quick-view-eye">
          <button
            type="button"
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#view"
            onClick={() => setSelectedProduct(product)}
          >
            <i className="fa fa-eye" />
          </button>
        </div>

        {/* Add To Cart */}
        <div className="add-to-cart-btn-2 addtocart_btn">
          <button
            className="btn addcart-button btn buy-button"
            onClick={() => onAddToCart(product)}
          >
            <i className="fa-solid fa-plus" />
          </button>
        </div>
      </div>
    </div>
  );
}