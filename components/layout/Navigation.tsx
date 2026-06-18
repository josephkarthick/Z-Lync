export default function Navigation() {
  return (
    <div className="border border-gray-300 hidden xl:flex header-bottom sticky-header border-r-0 border-l-0 ">
      <div className="container">
        <div className="hidden relative items-center justify-between xl:flex">
          <div className="relative">
            <button
              className="btn btn-primary btn-large rounded-lg"
              id="dropdownButton"
              data-state="close"
            >
              <span className="inline-flex items-center">
                <i className="hgi hgi-stroke hgi-grid-view text-base text-white" />
              </span>
              Explore All Categories{" "}
              <span
                className="inline-flex items-center transition-transform duration-300 "
                id="dropdownIcon"
              >
                <i className="hgi hgi-stroke hgi-arrow-down-01 text-xl text-white" />
              </span>
            </button>
            <div />
          </div>
          <nav className="main-menu">
            <ul>
              <li className="has-sub-item">
                <a className="active flex items-center gap-1" href="#">
                  Home{" "}
                  <i className="hgi hgi-stroke hgi-arrow-down-01 text-xl leading-none" />
                </a>
                <ul>
                  <li className="">
                    <a
                      className="flex items-center justify-between w-full"
                      href="index.html"
                    >
                      Healthcare
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="flex items-center justify-between w-full"
                      href="index-2.html"
                    >
                      Beauty
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="flex items-center justify-between w-full"
                      href="index-3.html"
                    >
                      Grocery
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="flex items-center justify-between w-full"
                      href="index-4.html"
                    >
                      Fashion
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="flex items-center justify-between w-full"
                      href="index-5.html"
                    >
                      Electronics
                    </a>
                  </li>
                </ul>
              </li>
              <li className="">
                <a className="flex items-center gap-1" href="about.html">
                  About Us
                </a>
              </li>
              <li className="has-sub-item">
                <a className="flex items-center gap-1" href="#">
                  Shop{" "}
                  <i className="hgi hgi-stroke hgi-arrow-down-01 text-xl leading-none" />
                </a>
                <ul>
                  <li className="has-sub-item">
                    <a
                      className="flex items-center justify-between w-full"
                      href="#"
                    >
                      Product Details{" "}
                      <i className="hgi hgi-stroke hgi-arrow-down-01 text-xl leading-none" />
                    </a>
                    <ul>
                      <li>
                        <a href="product-details.html">
                          Product Details Version 1
                        </a>
                      </li>
                      <li>
                        <a href="product-details-2.html">
                          Product Details Version 2
                        </a>
                      </li>
                      <li>
                        <a href="product-details-3.html">
                          Product Details Version 3
                        </a>
                      </li>
                      <li>
                        <a href="product-details-4.html">
                          Product Details Version 4
                        </a>
                      </li>
                      <li>
                        <a href="product-details-5.html">
                          Product Details Version 5
                        </a>
                      </li>
                      <li>
                        <a href="product-details-6.html">
                          Product Details Version 6
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div>
            <p className="xl:flex lg:items-center gap-x-4 hidden">
              <span className="size-12 inline-flex items-center justify-center rounded-full transition-colors duration-300 bg-[rgba(145,158,171,0.08)]">
                <i className="hgi hgi-stroke hgi-customer-support text-2xl text-light-primary-text" />
              </span>
              <span className="flex flex-col text-sm leading-[22px]">
                24/7 Support{" "}
                <span className="text-base leading-6 text-light-primary-text">
                  888-777-999
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}