/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ProductListIphone from "./ProductListIphone";
import ProductListSamsung from "./ProductListSamsung";

function HomePage() {
  return (
    <main id="mainContainer">
      <div className="container">
        <section className="section">
          <h1>Danh sách sản phẩm bán chạy Iphone</h1>
          <div className="row">
            <ProductListIphone />
          </div>
          <h1>Danh sách sản phẩm bán chạy Samsung</h1>
          <div className="row">
            <ProductListSamsung />
          </div>
        </section>
      </div>
    </main>
  );
}

export default HomePage;
