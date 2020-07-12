/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import CartItem from "./CartItem";
import CartResult from "./CartResult";
import { ListCartContext } from "../context/StateCart";

function Cart() {
  const { listCart } = useContext(ListCartContext);
  return (
    <section className="section">
      <div className="table-responsive">
        <table className="table product-table">
          <thead>
            <tr>
              <th />
              <th>Sản Phẩm</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Tổng Cộng</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {listCart.map((cart, index) => {
              return <CartItem key={index} cart={cart} />;
            })}
            <CartResult />
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Cart;
