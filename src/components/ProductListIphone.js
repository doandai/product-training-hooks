import React, { useContext } from "react";
import { ListIphoneContext } from "../context/StateIphone";
import ProductIphone from "./ProductIphone";

function ProductListIphone() {
  const { listIphone, title, price } = useContext(ListIphoneContext);
  console.log(price);
  if (price) {
    return (
      <div className="row">
        {price.map((item) => {
          return <ProductIphone key={item.id} item={item} />;
        })}
      </div>
    );
  }
  if (title) {
    return (
      <div className="row">
        {title.map((item) => {
          return <ProductIphone key={item.id} item={item} />;
        })}
      </div>
    );
  }
  return (
    <div className="row">
      {listIphone.map((item) => {
        return <ProductIphone key={item.id} item={item} />;
      })}
    </div>
  );
}

export default ProductListIphone;
