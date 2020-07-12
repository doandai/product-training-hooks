import React, { useContext } from "react";
import { ListSamsungContext } from "../context/StateSamsung";
import ProductSamsung from "./ProductSamsung";
function ProductListSamsung() {
  const { listSamsung } = useContext(ListSamsungContext);
  return (
    <div className="row">
      {listSamsung.map((item) => {
        return <ProductSamsung key={item.id} item={item} />;
      })}
    </div>
  );
}

export default ProductListSamsung;
