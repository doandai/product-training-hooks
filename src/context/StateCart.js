/* eslint-disable array-callback-return */
import React, { createContext, useState } from "react";

export const ListCartContext = createContext();

function StateCart(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [value, setValue] = useState();
  const [listCart, setListCart] = useState([
    {
      name: "Iphone X",
      price: 500,
      img:
        "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
      stars: 5,
      quantity: 1,
    },
  ]);

  const addItem = (item) => {
    const index = listCart.find((cart) => cart.id === item.id);

    if (index === undefined) {
      setListCart([
        ...listCart,
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
  };
  const removeItem = (id) => {
    setListCart(listCart.filter((cart) => cart.id !== id));
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
    setTitle(
      listCart.filter((text) => {
        return text.name.toLocaleLowerCase().indexOf(key) !== -1;
      })
    );
  };
  const sortPriceC = (value) => {
    value = parseInt(value);
    setValue(value);
    if (value !== null) {
      const sortListCart = [...listCart];
      if (value === -1) {
        setPrice(
          listCart.filter((item) => {
            return item;
          })
        );
      } else if (value === 0) {
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
