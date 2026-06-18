export default function HomeBanner() {
  return (

  <div className="section-b-space">
    <div className="row g-md-4 g-3">
      <div className="col-xxl-8 col-xl-12 col-md-7">
        <div className="banner-contain hover-effect">
          <img
            src="../assets/images/grocery/banner/11.jpg"
            className="bg-img blur-up lazyload"
            alt=""
          />
          <div className="banner-details p-center-left p-sm-5 p-4">
            <div>
              <h2 className="text-kaushan fw-normal orange-color">
                Get Ready To
              </h2>
              <h3 className="mt-2 mb-3 text-white">TAKE ON THE DAY!</h3>
              <p className="text-content banner-text text-white opacity-75 d-md-block d-none">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate.
              </p>
              <button
                onclick="location.href = 'shop-left-sidebar.html';"
                className="btn btn-animation btn-sm mend-auto"
              >
                Shop Now <i className="fa-solid fa-arrow-right icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-4 col-xl-12 col-md-5">
        <div className="banner-contain hover-effect h-100">
          <img
            src="../assets/images/grocery/banner/12.jpg"
            className="bg-img blur-up lazyload"
            alt=""
          />
          <div className="banner-details p-center-left p-4 h-100">
            <div>
              <h2 className="text-kaushan fw-normal orange-color">Organic</h2>
              <h3 className="mt-2 mb-3">Fresh</h3>
              <p className="text-content banner-text w-100">
                Super Offer to 50% Off
              </p>
              <button
                onclick="location.href = 'shop-left-sidebar.html';"
                className="btn btn-animation btn-sm mend-auto"
              >
                Shop Now <i className="fa-solid fa-arrow-right icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  );
}