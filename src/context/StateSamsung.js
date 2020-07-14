import React, { createContext, useState } from "react";

export const ListSamsungContext = createContext();
function StateIphone(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [value, setValue] = useState();
  const [listSamsung, setListSamsung] = useState([
    {
      id: 1,
      name: "Samsung s10",
      price: 600,
      img:
        "https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-thumb-600x600.jpg",
      stars: 5,
    },
    {
      id: 2,
      name: "Samsung s6",
      price: 300,
      img:
        "https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-thumb-600x600.jpg",
      stars: 4,
    },
  ]);
  const searchTextS = (key) => {
    setTitle(
      listSamsung.filter((text) => {
        return text.name.toLocaleLowerCase().indexOf(key) !== -1;
      })
    );
  };
  const sortPriceS = (value) => {
    value = parseInt(value);
    console.log(value);
    setValue(value);
    if (value !== null) {
      const newListSamsung = [...listSamsung];
      if (value === -1) {
        setPrice(
          listSamsung.filter((item) => {
            return item;
          })
        );
      } else if (value === 0) {
        setPrice(
          newListSamsung.sort(function (a, b) {
            return a.price - b.price;
          })
        );
      } else {
        setPrice(
          newListSamsung.sort(function (a, b) {
            return b.price - a.price;
          })
        );
      }
    }
  };
  return (
    <ListSamsungContext.Provider
      value={{ listSamsung, searchTextS, title, sortPriceS, price }}
    >
      {props.children}
    </ListSamsungContext.Provider>
  );
}

export default StateIphone;
