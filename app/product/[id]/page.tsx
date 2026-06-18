import { notFound } from "next/navigation";
import { garbageBags } from "@/components/product/data";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = garbageBags.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Product Section */}
      <section
        className="product-section"
        style={{ marginTop: "20px" }}
      >
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12 wow fadeInUp">
              <div className="row g-4">

                {/* Product Images */}
                <div className="col-xl-6">
                  <div className="product-left-box">
                    <div className="row g-sm-4 g-2">

                      <div className="col-2">
                        <div className="left-slider-image left-slider no-arrow">

                          {[1, 2, 3, 4].map((item) => (
                            <div
                              key={item}
                              className="mb-3"
                            >
                              <div className="sidebar-image border rounded p-2">
                                <img
                                  src={product.image}
                                  className="img-fluid"
                                  alt={product.name}
                                />
                              </div>
                            </div>
                          ))}

                        </div>
                      </div>

                      <div className="col-10">
                        <div
                          className="slider-image text-center border rounded p-4"
                          style={{
                            minHeight: "550px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "#fff",
                          }}
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid"
                            style={{
                              maxHeight: "500px",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="col-xl-6">
                  <div className="right-box-contain">

                    <h6 className="offer-top">
                      Premium Product
                    </h6>

                    <h2
                      className="name"
                      style={{
                        fontSize: "42px",
                        fontWeight: "700",
                      }}
                    >
                      {product.name}
                    </h2>

                    <div className="price-rating mt-3">

                      <h3
                        className="theme-color price"
                        style={{
                          fontSize: "36px",
                          fontWeight: "700",
                        }}
                      >
                        ₹ {product.price}
                      </h3>

                      <div className="product-rating custom-rate mt-2">
                        <ul className="rating">
                          <li>
                            <i className="fa fa-star text-warning" />
                          </li>
                          <li>
                            <i className="fa fa-star text-warning" />
                          </li>
                          <li>
                            <i className="fa fa-star text-warning" />
                          </li>
                          <li>
                            <i className="fa fa-star text-warning" />
                          </li>
                          <li>
                            <i className="fa fa-star-half-alt text-warning" />
                          </li>
                        </ul>

                        <span className="review">
                          23 Customer Reviews
                        </span>
                      </div>
                    </div>

                    <div className="product-contain mt-4">
                      <p>
                        {product.description ||
                          "Premium quality garbage bag designed for homes, offices, hotels and commercial use."}
                      </p>
                    </div>

                    {/* Size */}
                    <div className="product-package mt-4">
                      <div className="product-title">
                        <h4>Size</h4>
                      </div>

                      <div className="select-package">
                        <select className="form-control form-select">
                          <option>
                            {product.weight}
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Timer */}
                    <div
                      className="time deal-timer product-deal-timer mt-4"
                    >
                      <div className="product-title">
                        <h4>Hurry up! Sales Ends In</h4>
                      </div>

                      <ul>
                        <li>
                          <div className="counter d-block">
                            <h5>14</h5>
                            <h6>Days</h6>
                          </div>
                        </li>

                        <li>
                          <div className="counter d-block">
                            <h5>23</h5>
                            <h6>Hours</h6>
                          </div>
                        </li>

                        <li>
                          <div className="counter d-block">
                            <h5>59</h5>
                            <h6>Min</h6>
                          </div>
                        </li>

                        <li>
                          <div className="counter d-block">
                            <h5>45</h5>
                            <h6>Sec</h6>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Quantity + Cart */}
                    <div className="note-box product-package mt-4">

                      <div className="cart_qty qty-box product-qty">
                        <div className="input-group">

                          <button
                            type="button"
                            className="qty-left-minus"
                          >
                            <i className="fa fa-minus" />
                          </button>

                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            value="1"
                            readOnly
                          />

                          <button
                            type="button"
                            className="qty-right-plus"
                          >
                            <i className="fa fa-plus" />
                          </button>

                        </div>
                      </div>

                      <button className="btn btn-md bg-dark cart-button text-white w-100">
                        Add To Cart
                      </button>

                    </div>

                    {/* Product Information */}
                    <div className="pickup-box mt-4">

                      <div className="product-title">
                        <h4>Product Information</h4>
                      </div>

                      <div className="product-info">
                        <ul className="product-info-list product-info-list-2">

                          <li>
                            SKU :
                            <a href="#">
                              {product.sku || "LGB001"}
                            </a>
                          </li>

                          <li>
                            Weight :
                            <a href="#">
                              {product.weight}
                            </a>
                          </li>

                          <li>
                            Stock Status :
                            <a href="#">
                              In Stock
                            </a>
                          </li>

                          <li>
                            Quantity :
                            <a href="#">
                              {product.stock_qty || 100} Items Left
                            </a>
                          </li>

                        </ul>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Tabs */}
      <section className="pb-5">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">

              <div className="product-section-box m-0">

                <ul
                  className="nav nav-tabs custom-nav"
                  role="tablist"
                >
                  <li className="nav-item">
                    <button
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#description"
                    >
                      Description
                    </button>
                  </li>

                  <li className="nav-item">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#info"
                    >
                      Additional Info
                    </button>
                  </li>
                </ul>

                <div className="tab-content custom-tab">

                  <div
                    className="tab-pane fade show active"
                    id="description"
                  >
                    <div className="product-description">
                      <div className="nav-desh">
                        <p>
                          {product.description ||
                            "Premium quality garbage bags suitable for home, office, commercial and industrial usage."}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="info"
                  >
                    <div className="table-responsive">

                      <table className="table info-table">
                        <tbody>

                          <tr>
                            <td>SKU</td>
                            <td>{product.sku || "LGB001"}</td>
                          </tr>

                          <tr>
                            <td>Weight</td>
                            <td>{product.weight}</td>
                          </tr>

                          <tr>
                            <td>Stock</td>
                            <td>
                              {product.stock_qty || 100}
                            </td>
                          </tr>

                          <tr>
                            <td>Price</td>
                            <td>
                              ₹ {product.price}
                            </td>
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
    </>
  );
}