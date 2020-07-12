import React, { createContext, useState } from "react";

export const ListCartContext = createContext();

function StateCart(props) {
  const [listCart, setListCart] = useState([
    {
      name: "Iphone X",
      price: 500,
      img:
        "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
      stars: 5,
    },
  ]);
  return (
    <ListCartContext.Provider value={{ listCart }}>
      {props.children}
    </ListCartContext.Provider>
  );
}
export default StateCart;
