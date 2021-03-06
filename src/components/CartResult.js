import React from "react";

function CartResult({ cart, changeQuantity }) {
  const total = cart
    .map((cart) => cart.quantity * cart.price)
    .reduce((item, price) => item + price, 0);
  return (
    <tr>
      <td colSpan={3} />
      <td>
        <h4>
          <strong>Tổng Tiền</strong>
        </h4>
      </td>
      <td>
        <h4>
          <strong>{total}$</strong>
        </h4>
      </td>
      <td colSpan={3}>
        <button
          type="button"
          className="btn btn-primary waves-effect waves-light"
        >
          Complete purchase
          <i className="fa fa-angle-right right" />
        </button>
      </td>
    </tr>
  );
}

export default CartResult;
