"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/components/cart/CartContext";
import { garbageBags } from "@/components/product/data";

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();

  const product = garbageBags.find(
    (p) => p.id === Number(params.id)
  );

  if (!product) {
    return <div>Product Not Found</div>;
  }

const images = Array.from(
  { length: product.image_count || 1 },
  (_, i) =>
    `/assets/images/product/${product.id}/${i + 1}.webp`
);

const [selectedImage, setSelectedImage] =
  useState(images[0]);

  return (
    <>

  {/* Product Left Sidebar Start */}
  <section className="product-section">
    <div className="container-fluid-lg">
      <div className="row">
        <div className="col-xxl-9 col-xl-8 col-lg-7 wow fadeInUp">
          <div className="row g-4">
            <div className="col-xl-6 wow fadeInUp">
              <div className="product-left-box">
                <div className="row g-sm-4 g-2">
                  <div className="col-12">
<div className="product-main no-arrow">
  <div>
    <div className="slider-image">
      <img
        src={selectedImage}
        className="img-fluid image_zoom_cls-0 blur-up lazyload"
        alt={product.name}
      />
    </div>
  </div>
</div>
                  </div>
                  <div className="col-12">
<div className="left-slider-image left-slider no-arrow slick-top">

  {images.map((img, index) => (
    <div key={index}>
      <div
        className="sidebar-image"
        onClick={() => setSelectedImage(img)}
        style={{
          cursor: "pointer",
          border:
            selectedImage === img
              ? "2px solid var(--theme-color)"
              : "1px solid #eee",
          borderRadius: "8px",
        }}
      >
        <img
          src={img}
          className="img-fluid blur-up lazyload"
          alt={`${product.name}-${index + 1}`}
        />
      </div>
    </div>
  ))}

</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInUp">
              <div className="right-box-contain">
                <h6 className="offer-top">30% Off</h6>
                <h2 className="name">  {product.name}</h2>
                <div className="price-rating">
                  <h3 className="theme-color price">
                     ₹ {product.price} <del className="text-content">$58.46</del>{" "}
                    <span className="offer theme-color">(8% off)</span>
                  </h3>
                  <div className="product-rating custom-rate">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <span className="review">23 Customer Review</span>
                  </div>
                </div>
                <div className="product-contain">
                  <p className="w-100">
                   {product.description || "N/A"}
                  </p>
                </div>
                <div className="pickup-box">
                  <div className="product-info">
                    <ul className="product-info-list product-info-list-2">
                      <li>
                        SKU : <a href="javascript:void(0)">{product.sku || "N/A"}</a>
                      </li>
                      <li>
                        Unit : <a href="javascript:void(0)">1 Ltr</a>
                      </li>
                      <li>
                        Weight : <a href="javascript:void(0)">{product.weight || "N/A"}</a>
                      </li>
                      <li>
                        Stock Status : <a href="javascript:void(0)">In Stock</a>
                      </li>
                      <li>
                        Quantity :{" "}
                        <a href="javascript:void(0)">{product.stock_qty || "N/A"} Items Left</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="note-box product-package">

<button
  onClick={() => addToCart(product)}
  className="btn btn-md bg-dark cart-button text-white w-100"
>
  Add To Cart
</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Product Left Sidebar End */}
  {/* Nav Tab Section Start */}
  <section>
    <div className="container-fluid-lg">
      <div className="row">
        <div className="col-12">
          <div className="product-section-box m-0">
            <ul className="nav nav-tabs custom-nav" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="description-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#description"
                  type="button"
                  role="tab"
                >
                  Description
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="info-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#info"
                  type="button"
                  role="tab"
                >
                  Additional info
                </button>
              </li>
            </ul>
            <div className="tab-content custom-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="description"
                role="tabpanel"
              >
                <div className="product-description">
                  <div className="nav-desh">
                    <p>
  {product.description || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="info" role="tabpanel">
                <div className="table-responsive">
                  <table className="table info-table">
<tbody>
  <tr>
    <td>SKU</td>
    <td>{product.sku || "N/A"}</td>
  </tr>

  <tr>
    <td>Weight</td>
    <td>{product.weight || "N/A"}</td>
  </tr>

  <tr>
    <td>Stock</td>
    <td>{product.stock_qty ?? "N/A"}</td>
  </tr>

  <tr>
    <td>Price</td>
    <td>₹ {product.price}</td>
  </tr>
</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Nav Tab Section End */}
</>


  );
}