/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function CartItem({ cart }) {
  return (
    <tr>
      <th scope="row">
        <img src={cart.img} alt="" className="img-fluid z-depth-0" />
      </th>
      <td>
        <h5>
          <strong>{cart.name}</strong>
        </h5>
      </td>
      <td>{cart.price}$</td>
      <td className="center-on-small-only">
        <span className="qty">1 </span>
        <div className="btn-group radio-group" data-toggle="buttons">
          <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
            <a>—</a>
          </label>
          <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
            <a>+</a>
          </label>
        </div>
      </td>
      <td>15$</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-primary waves-effect waves-light"
          data-toggle="tooltip"
          data-placement="top"
          data-original-title="Remove item"
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
