import React, { useContext } from "react";
import { ListIphoneContext } from "../context/StateIphone";
import ProductIphone from "./ProductIphone";

function ProductListIphone() {
  const { listIphone } = useContext(ListIphoneContext);
  return (
    <div className="row">
      {listIphone.map((item) => {
        return <ProductIphone key={item.id} item={item} />;
      })}
    </div>
  );
}

export default ProductListIphone;
