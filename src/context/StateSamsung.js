import React, { createContext, useState } from "react";

export const ListSamsungContext = createContext();
function StateSamsung(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [listSamsung, setListSamsung] = useState([
    {
      id: 4,
      name: "Samsung s10",
      price: 600,
      img:
        "https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-thumb-600x600.jpg",
      stars: 5,
    },
    {
      id: 5,
      name: "Samsung s7",
      price: 300,
      img:
        "https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-thumb-600x600.jpg",
      stars: 4,
    },
  ]);
  const searchTextS = (key) => {
    setPrice();
    if (key) {
      setTitle(
        listSamsung.filter((text) => {
          return text.name.toLocaleLowerCase().indexOf(key) !== -1;
        })
      );
    } else {
      setTitle("");
    }
  };
  const sortPriceS = (sort) => {
    sort = parseInt(sort);

    if (sort) {
      const sortListSamsung = [...listSamsung];
      if (sort === 1) {
        setPrice(
          sortListSamsung.filter((item) => {
            return item;
          })
        );
      } else if (sort === 2) {
        setPrice(
          sortListSamsung.sort(function (a, b) {
            return a.price - b.price;
          })
        );
      } else if (sort === 3) {
        setPrice(
          sortListSamsung.sort(function (a, b) {
            return b.price - a.price;
          })
        );
      }
    } else {
      setPrice();
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

export default StateSamsung;
