import Link from "next/link";

export default function Sidebar() {
  return (

      <div className="sidebar-col">
        <div className="category-menu">
          <a href="index.html" className="web-logo nav-logo">
            <img
              src="../assets/images/logo/5.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>
          <ul>
            <li>
              <div className="category-list">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg"
                  className="blur-up lazyload"
                  alt=""
                />
<h5>
  <Link href="/">Home</Link>
</h5>
              </div>
            </li>
            <li>
              <div className="category-list">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>
                  <Link href="/about">About</Link>
                </h5>
              </div>
            </li>
            <li>
              <div className="category-list">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>
                  <a href="shop-left-sidebar.html">Meats &amp; Seafood</a>
                </h5>
              </div>
            </li>
            <li>
              <div className="category-list">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>
                  <a href="shop-left-sidebar.html">Breakfast &amp; Dairy</a>
                </h5>
              </div>
            </li>
            <li>
              <div className="category-list">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>
                  <a href="shop-left-sidebar.html">Frozen Foods</a>
                </h5>
              </div>
            </li>
            <li>
              <div className="category-list">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/biscuit.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>
                  <a href="shop-left-sidebar.html">Biscuits &amp; Snacks</a>
                </h5>
              </div>
            </li>
            <li>
              <div className="category-list">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>
                  <a href="shop-left-sidebar.html">Grocery &amp; Staples</a>
                </h5>
              </div>
            </li>
            <li>
              <div className="category-list">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/drink.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>
                  <a href="shop-left-sidebar.html">
                    Wines &amp; Alcohol Drinks
                  </a>
                </h5>
              </div>
            </li>
            <li>
              <div className="category-list">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/milk.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>
                  <a href="shop-left-sidebar.html">Milk &amp; Dairies</a>
                </h5>
              </div>
            </li>
            <li className="pb-30">
              <div className="category-list">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/pet.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>
                  <a href="shop-left-sidebar.html">Pet Foods</a>
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </div>


  );
}