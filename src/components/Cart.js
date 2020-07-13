/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import CartItem from "./CartItem";
import CartResult from "./CartResult";
import { ListCartContext } from "../context/StateCart";

function Cart() {
  const { listCart, title } = useContext(ListCartContext);
  if (title) {
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
              {title.map((cart, index) => {
                return <CartItem key={index} cart={cart} />;
              })}
              <CartResult cart={listCart} />
            </tbody>
          </table>
        </div>
      </section>
    );
  }
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
            <CartResult cart={listCart} />
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Cart;
