/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Sort() {
  return (
    <div className="dropdown mr-1">
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        id="dropdownMenuOffset"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        data-offset="10,20"
      >
        Offset
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
        <a className="dropdown-item" href="#">
          Action
        </a>
        <a className="dropdown-item" href="#">
          Another action
        </a>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
      </div>
    </div>
  );
}

export default Sort;
