import type { Metadata } from "next";
import "./globals.css";

import "@/public/assets/css/animate.min.css";
import "@/public/assets/css/bulk-style.css";
import "@/public/assets/css/vendors/animate.css";


import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { CartProvider } from "@/components/cart/CartContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Script from "next/script";

export const metadata: Metadata = {
  title: "VaisKart",
  description: "Premium Garbage Bags",
  icons: {
    icon: "/assets/images/favicon/6.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Template CSS */}
        <link
          rel="stylesheet"
          href="/assets/css/vendors/bootstrap.css"
        />

        <link
          rel="stylesheet"
          href="/assets/css/style.css"
        />

        {/* Google Fonts */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>

      <body className="theme-color-4 bg-gradient-color">
        <CartProvider>


          {/* Global Header */}
          <Header />

          {/* Global Sidebar + Content */}
          <section className="product-section pt-0">
            <div className="container-fluid p-0">
              <div className="custom-row">

                <Sidebar />

                <div className="content-col min-vh-100">
                  {children}
                </div>

              </div>
            </div>
          </section>

          {/* Toast */}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="light"
          />

        </CartProvider>

        {/* jQuery */}
        <Script
          src="/assets/js/jquery-3.6.0.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/jquery-ui.min.js"
          strategy="afterInteractive"
        />

        {/* Bootstrap */}
        <Script
          src="/assets/js/bootstrap/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/bootstrap/bootstrap-notify.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/bootstrap/popper.min.js"
          strategy="afterInteractive"
        />

        {/* Feather Icons */}
        <Script
          src="/assets/js/feather/feather.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/feather/feather-icon.js"
          strategy="afterInteractive"
        />

        {/* Plugins */}
        <Script
          src="/assets/js/lazysizes.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/slick/slick.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/slick/slick-animation.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/slick/custom_slick.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/auto-height.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/fly-cart.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/quantity-2.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/wow.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/custom-wow.js"
          strategy="afterInteractive"
        />

        {/* Main Template JS */}
        <Script
          src="/assets/js/script.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/theme-setting.js"
          strategy="afterInteractive"
        />

        {/* Feather Init */}
        <Script
          id="feather-init"
          strategy="afterInteractive"
        >
          {`
            window.addEventListener('load', function () {
              if (window.feather) {
                feather.replace();
              }
            });
          `}
        </Script>

      </body>
    </html>
  );
}