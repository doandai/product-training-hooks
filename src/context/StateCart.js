/* eslint-disable array-callback-return */
import React, { createContext, useState, useEffect } from "react";

export const ListCartContext = createContext();

function StateCart(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [value, setValue] = useState();
  const initialState = JSON.parse(localStorage.getItem("listCart")) || [];
  const [listCart, setListCart] = useState(initialState);
  useEffect(() => {
    localStorage.setItem("listCart", JSON.stringify(listCart));
  }, [listCart]);
  const addItem = (item) => {
    const index = listCart.find((cart) => cart.id === item.id);

    if (index === undefined) {
      const newListCart = [...listCart];
      setListCart([
        ...newListCart,
        {
          name: item.name,
          id: item.id,
          price: item.price,
          img: item.img,
          stars: item.stars,
          quantity: 1,
        },
      ]);
    } else {
      const newListCart = [...listCart];
      newListCart.find((cart) => {
        if (cart.id === item.id) {
          cart.quantity += 1;
        }
      });
      setListCart(newListCart);
    }
    setTitle("");
  };
  const removeItem = (id) => {
    const newList = [...listCart];
    setListCart(newList.filter((cart) => cart.id !== id));
    setTitle("");
  };
  const changeQuantity = (id, quantity) => {
    const newListCart = [...listCart];
    newListCart.find((cart) => {
      if (cart.id === id) {
        cart.quantity = quantity;
      }
    });
    setListCart(newListCart);
  };
  const searchTextC = (key) => {
    if (key) {
      setTitle(
        listCart.filter((text) => {
          return text.name.toLocaleLowerCase().indexOf(key) !== -1;
        })
      );
    } else {
      setTitle("");
    }
  };
  const sortPriceC = (value) => {
    value = parseInt(value);
    setValue(value);
    if (value) {
      const sortListCart = [...listCart];
      if (value === 1) {
        setPrice(
          sortListCart.filter((item) => {
            return item;
          })
        );
      } else if (value === 2) {
        setPrice(
          sortListCart.sort(function (a, b) {
            return a.price - b.price;
          })
        );
      } else {
        setPrice(
          sortListCart.sort(function (a, b) {
            return b.price - a.price;
          })
        );
      }
    } else {
      setPrice();
    }
  };
  return (
    <ListCartContext.Provider
      value={{
        listCart,
        addItem,
        removeItem,
        changeQuantity,
        searchTextC,
        title,
        sortPriceC,
        price,
      }}
    >
      {props.children}
    </ListCartContext.Provider>
  );
}
export default StateCart;
