import React, { useContext } from "react";
import { ListSamsungContext } from "../context/StateSamsung";
import ProductSamsung from "./ProductSamsung";

function ProductListSamsung() {
  const { listSamsung, title, price } = useContext(ListSamsungContext);
  if (price) {
    return (
      <div className="row">
        {price.map((item) => {
          return <ProductSamsung key={item.id} item={item} />;
        })}
      </div>
    );
  }
  if (title) {
    return (
      <div className="row">
        {title.map((item) => {
          return <ProductSamsung key={item.id} item={item} />;
        })}
      </div>
    );
  }
  return (
    <div className="row">
      {listSamsung.map((item) => {
        return <ProductSamsung key={item.id} item={item} />;
      })}
    </div>
  );
}

export default ProductListSamsung;
