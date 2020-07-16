import React, { useState, useContext } from "react";
import { ListIphoneContext } from "../context/StateIphone";
import { ListSamsungContext } from "../context/StateSamsung";
import { ListCartContext } from "../context/StateCart";
function Sort() {
  const { sortPriceI } = useContext(ListIphoneContext);
  const { sortPriceS } = useContext(ListSamsungContext);
  const { sortPriceC } = useContext(ListCartContext);

  const [filterPrice, setFilterPrice] = useState(-1);

  const handleonChange = (e) => {
    setFilterPrice(e.target.value);
    sortPriceI(filterPrice ? e.target.value : filterPrice);
    sortPriceS(filterPrice ? e.target.value : filterPrice);
    sortPriceC(filterPrice ? e.target.value : filterPrice);
  };
  return (
    <select
      className="form-control"
      name="filterPrice"
      value={filterPrice}
      onChange={handleonChange}
    >
      <option value="-1">Sắp xếp</option>
      <option value="1">Tất Cả </option>
      <option value="2">Giá Tăng Dần </option>
      <option value="3">Giá Giảm Dần </option>
    </select>
  );
}

export default Sort;
