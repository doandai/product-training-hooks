import React, { createContext, useState } from "react";

export const ListSamsungContext = createContext();
function StateIphone(props) {
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
  return (
    <ListSamsungContext.Provider value={{ listSamsung }}>
      {props.children}
    </ListSamsungContext.Provider>
  );
}

export default StateIphone;