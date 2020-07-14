import React from "react";

function Sort() {
  return (
    <select className="form-control" name="filterPrice">
      <option value="-1">Tất Cả </option>
      <option value="0">Giá Tăng Dần </option>
      <option value="1">Giá Giảm Dần </option>
    </select>
  );
}

export default Sort;
