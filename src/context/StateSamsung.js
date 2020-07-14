import React, { createContext, useState } from "react";

export const ListSamsungContext = createContext();
function StateSamsung(props) {
  const [title, setTitle] = useState("");
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
      name: "Samsung s6",
      price: 300,
      img:
        "https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-thumb-600x600.jpg",
      stars: 4,
    },
  ]);
  const searchTextS = (key) => {
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

  return (
    <ListSamsungContext.Provider value={{ listSamsung, searchTextS, title }}>
      {props.children}
    </ListSamsungContext.Provider>
  );
}

export default StateSamsung;
