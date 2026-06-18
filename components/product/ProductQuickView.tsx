"use client";

import { useCart } from "@/components/cart/CartContext";

interface ProductQuickViewProps {
  product: any;
}

export default function ProductQuickView({
  product,
}: ProductQuickViewProps) {

  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <>
      <div
        className="modal fade theme-modal view-modal"
        id="view"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header p-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            <div className="modal-body">
              <div className="row g-sm-4 g-2">

				<div className="col-lg-5">
				<div
					className="slider-image d-flex align-items-center justify-content-center"
					style={{
					minHeight: "400px",
					background: "#f8f8f8",
					borderRadius: "10px",
					padding: "20px",
					}}
				>
					<img
					src={product.image}
					alt={product.name}
					className="img-fluid"
					style={{
						maxHeight: "320px",
						objectFit: "contain",
					}}
					/>
				</div>
				</div>

                <div className="col-lg-6">
                  <div className="right-sidebar-modal">

                    <h4 className="title-name">
                      {product.name}
                    </h4>

                    <h4 className="price">
                      ₹ {product.price}
                    </h4>

                    <div className="product-detail">
                      <h4>Product Details :</h4>

                      <p>
                        {product.description ||
                          "Premium quality product."}
                      </p>
                    </div>

                    <ul className="brand-list">

                      <li>
                        <div className="brand-box">
                          <h5>Size :</h5>
                          <h6>{product.weight}</h6>
                        </div>
                      </li>

                      <li>
                        <div className="brand-box">
                          <h5>SKU :</h5>
                          <h6>{product.sku || "-"}</h6>
                        </div>
                      </li>

                      <li>
                        <div className="brand-box">
                          <h5>Stock :</h5>
                          <h6>
                            {product.stock_qty || "Available"}
                          </h6>
                        </div>
                      </li>

                    </ul>

						<div className="modal-button">
						
						<button
							className="btn btn-md add-cart-button icon"
							data-bs-dismiss="modal"
							onClick={() => addToCart(product)}
						>
							Add To Cart
						</button>
						
						<a
							href={`/product/${product.id}`}
							className="btn theme-bg-color view-button icon text-white fw-bold btn-md"
						>
							View More Details
						</a>
						
						</div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}