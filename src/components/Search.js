import React, { useState, useContext } from "react";
import { ListIphoneContext } from "../context/StateIphone";
import { ListSamsungContext } from "../context/StateSamsung";
import { ListCartContext } from "../context/StateCart";
function Search() {
  const { searchTextI } = useContext(ListIphoneContext);
  const { searchTextS } = useContext(ListSamsungContext);
  const { searchTextC } = useContext(ListCartContext);
  const [key, setKey] = useState("");
  const handleOnChange = (e) => {
    setKey(e.target.value);
  };
  const handleClick = () => {
    searchTextI(key);
    searchTextS(key);
    searchTextC(key);
    setKey("");
  };
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search Name"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        value={key}
        onChange={handleOnChange}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          Tim
        </button>
      </div>
    </div>
  );
}

export default Search;
