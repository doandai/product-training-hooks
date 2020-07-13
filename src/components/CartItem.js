/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState, useEffect } from "react";
import { ListCartContext } from "../context/StateCart";

function CartItem({ cart }) {
  const [quantity, setQuantity] = useState(cart.quantity);
  const { removeItem } = useContext(ListCartContext);
  const handleClick = (cart) => {
    removeItem(cart.id);
  };

  const handleChangeQuantity = (quantity) => {
    if (quantity < 1) {
      return quantity;
    } else {
      setQuantity(quantity);
    }
  };
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
        <span className="qty">{quantity} </span>
        <div className="btn-group radio-group" data-toggle="buttons">
          <label
            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            onClick={() => handleChangeQuantity(quantity - 1)}
          >
            <a>—</a>
          </label>
          <label
            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            onClick={() => handleChangeQuantity(quantity + 1)}
          >
            <a>+</a>
          </label>
        </div>
      </td>
      <td>{quantity * cart.price}$</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-primary waves-effect waves-light"
          data-toggle="tooltip"
          data-placement="top"
          data-original-title="Remove item"
          onClick={() => handleClick(cart)}
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
