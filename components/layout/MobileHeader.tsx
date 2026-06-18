export default function MobileHeader() {
  return (
    <div className="border border-gray-300 xl:border-0 sticky-header xl:hidden ">
      <div className="pb-4 pt-3">
        <div className="container">
          <div className="flex justify-between items-center">
            <button
              className="btn btn-default outline shadow-none size-12 rounded-[50px]"
              aria-label="Open navigation menu"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 12L10 12"
                  stroke="#212529"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 5L4 5"
                  stroke="#212529"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 19L4 19"
                  stroke="#212529"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <a href="index.html">
              <img
                alt="Logo"
                loading="lazy"
                width={150}
                height={40}
                decoding="async"
                data-nimg={1}
                className="w-[120px] md:w-[150px]"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75 1x, /_next/image?url=%2Fimages%2Flogo.png&w=384&q=75 2x"
                src="_next/imagef827.png?url=%2Fimages%2Flogo.png&w=384&q=75"
              />
            </a>
            <button
              className="btn bg-warning-light size-12 rounded-[50px]"
              aria-label="Open cart"
            >
              <i className="hgi hgi-stroke hgi-shopping-cart-01 text-light-primary-text text-2xl leading-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}