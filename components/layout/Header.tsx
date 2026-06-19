"use client";

import { useState } from "react";
import { garbageBags } from "@/components/product/data";

import { useCart } from "@/components/cart/CartContext";

export default function Header() {
	const { cartItems } = useCart();
	
	const [search, setSearch] = useState("");
const filteredProducts = garbageBags.filter((product) =>
  product.name
    .toLowerCase()
    .includes(search.toLowerCase())
);	

  return (
<>
  {/* Header Start */}

  <header className="pb-0 fixed-header">
    <div className="header-top">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-xxl-3 d-xxl-block d-none">
            <div className="top-left-header">
             
<span className="text-white">
  Available Across India on Amazon
</span>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-9 d-lg-block d-none">
            <div className="header-offer">
              <div className="notification-slider">
                <div>
                  <div className="timer-notification">
<h6>
  <strong className="me-1">Welcome to VaisKart!</strong>
  Discover premium quality products at unbeatable prices every day.
  <strong className="ms-1">Special discounts available for bulk orders.</strong>
</h6>
                  </div>
                </div>
                <div>
                  <div className="timer-notification">
                    <h6>
                        Start Shopping Today!

                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="top-nav top-header">
      <div className="container-fluid-xs">
        <div className="row">
          <div className="col-12">
            <div className="navbar-top">
              <button
                className="navbar-toggler d-xl-none d-inline navbar-menu-button"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#primaryMenu"
              >
                <span className="navbar-toggler-icon navbar-toggler-icon-2">
                  <i className="fa-solid fa-bars" />
                </span>
              </button>
              <div className="middle-box">

                <div className="search-box">
                  <div className="input-group">
<div className="position-relative">

  <div className="input-group">
    <input
      type="search"
      className="form-control"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <button
      className="btn bg-theme"
      type="button"
    >
      <i data-feather="search" />
    </button>
  </div>

  {search && filteredProducts.length > 0 && (
    <div
      className="bg-white shadow position-absolute w-100"
      style={{
        zIndex: 9999,
        maxHeight: "300px",
        overflowY: "auto",
      }}
    >
      {filteredProducts.map((product) => (
        <a
          key={product.id}
          href={`/product/${product.id}`}
          className="d-flex align-items-center p-2 border-bottom text-decoration-none"
        >
<img
  src={`/assets/images/product/${product.id}/1.webp`}
  alt={product.name}
  width="50"
  height="50"
  className="me-2"
/>

          <div>
            <div>{product.name}</div>

            <small className="theme-color">
              ₹ {product.price}
            </small>
          </div>
        </a>
      ))}
    </div>
  )}

</div>

                  </div>
                </div>
              </div>
              <div className="rightside-box">
                <div className="search-full">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i data-feather="search" className="font-light" />
                    </span>
                    <input
                      type="text"
                      className="form-control search-type"
                      placeholder="Search here.."
                    />
                    <span className="input-group-text close-search">
                      <i data-feather="x" className="font-light" />
                    </span>
                  </div>
                </div>
                <ul className="right-side-menu">
                  <li className="right-side">
                    <div className="delivery-login-box">
                      <div className="delivery-icon">
                        <div className="search-box">
                          <i data-feather="search" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="right-side">
                    <a href="contact-us.html" className="delivery-login-box">
                      <div className="delivery-icon">
                        <i data-feather="phone-call" />
                      </div>
                      <div className="delivery-detail">
                        <h5>24/7 Delivery</h5>
                        <h6>+91 94980 43243</h6>
                      </div>
                    </a>
                  </li>
                  <li className="right-side">
                    <a
                      href="wishlist.html"
                      className="btn p-0 position-relative header-wishlist"
                    >
                      <i data-feather="heart" />
                    </a>
                  </li>
					<li className="right-side">
					<div className="onhover-dropdown header-badge">
						<button
						type="button"
						className="btn p-0 position-relative header-wishlist"
						data-bs-toggle="offcanvas"
						data-bs-target="#cartOffcanvas"
						>
						<i data-feather="shopping-cart" />
					
						{cartItems.length > 0 && (
							<span className="position-absolute top-0 start-100 translate-middle badge">
							{cartItems.reduce(
								(total, item) => total + item.quantity,
								0
							)}
							</span>
						)}
						</button>
					</div>
					</li>
					
                  <li className="right-side onhover-dropdown">
                    <div className="delivery-login-box">
                      <div className="delivery-icon">
                        <i data-feather="user" />
                      </div>
                      <div className="delivery-detail">
                        <h6>Hello,</h6>
                        <h5>My Account</h5>
                      </div>
                    </div>
                    <div className="onhover-div onhover-div-login">
                      <ul className="user-box-name">
                        <li className="product-box-contain">
                          <i />
                          <a href="login.html">Log In</a>
                        </li>
                        <li className="product-box-contain">
                          <a href="sign-up.html">Register</a>
                        </li>
                        <li className="product-box-contain">
                          <a href="forgot.html">Forgot Password</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* Header End */}
  
<div
  className="offcanvas offcanvas-end"
  tabIndex={-1}
  id="cartOffcanvas"
>
  <div className="offcanvas-header">
    <h5>Your Cart</h5>

    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="offcanvas"
    />
  </div>

  <div className="offcanvas-body">
    {cartItems.length === 0 ? (
      <p>No items in cart</p>
    ) : (
      <>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="d-flex align-items-center mb-3"
          >
            <img
              src={item.image}
              alt={item.name}
              width="60"
              height="60"
              className="me-3"
            />

            <div>
              <h6>{item.name}</h6>

              <small>
                Qty: {item.quantity}
              </small>

              <br />

              <strong>
                ₹ {item.price * item.quantity}
              </strong>
            </div>
          </div>
        ))}

        <hr />

        <h5>
          Total ₹{" "}
          {cartItems.reduce(
            (sum, item) =>
              sum + item.price * item.quantity,
            0
          )}
        </h5>
      </>
    )}
  </div>
</div>  
</>

  );
}