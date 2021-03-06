/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { ListCartContext } from "../context/StateCart";
function ProductIphone({ item }) {
  const { addItem } = useContext(ListCartContext);
  const handleClick = (item) => {
    addItem(item);
  };
  return (
    <div className="col-lg-4 col-md-6 mb-r">
      <div className="card text-center card-cascade narrower">
        <div className="view overlay hm-white-slight z-depth-1">
          <img src={item.img} className="img-fluid" alt="" />
          <a>
            <div className="mask waves-light waves-effect waves-light" />
          </a>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            <strong>
              <a>{item.name}</a>
            </strong>
          </h4>
          <ul className="rating">
            <li>
              <i className="fa fa-star" />
            </li>
            <li>
              <i className="fa fa-star" />
            </li>
            <li>
              <i className="fa fa-star" />
            </li>
            <li>
              <i className="fa fa-star" />
            </li>
            <li>
              <i className="fa fa-star" />
            </li>
          </ul>
          <p className="card-text">Sản phẩm do apply sản xuất</p>
          <div className="card-footer">
            <span className="left">{item.price}$</span>
            <span className="right">
              <a
                className="btn-floating blue-gradient"
                data-toggle="tooltip"
                data-placement="top"
                data-original-title="Add to Cart"
                onClick={() => handleClick(item)}
              >
                <i className="fa fa-shopping-cart" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductIphone;
