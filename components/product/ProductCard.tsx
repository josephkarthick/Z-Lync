interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
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
  return (
    <div className="product-box product-white-bg wow fadeIn">
      <div className="product-image">
        <a href={`/product/${product.slug}`}>
          <img
            src={product.image}
            className="img-fluid blur-up lazyload"
            alt={product.name}
          />
        </a>
      </div>

      <div className="product-detail position-relative">
       <a href={`/product/${product.slug}`}>
          <h6 className="name">
            {product.name}
          </h6>
        </a>

        <h6 className="sold weight text-content fw-normal">
          {product.weight}
        </h6>

        <h6 className="price theme-color">
          ₹ {product.price}
        </h6>

        {/* Quick View Button */}
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

        {/* Add To Cart Button */}
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