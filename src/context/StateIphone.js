import React, { createContext, useState } from "react";

export const ListIphoneContext = createContext();
function StateIphone(props) {
  const [listIphone, setListIphone] = useState([
    {
      id: 1,
      name: "Iphone X",
      price: 500,
      img:
        "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
      stars: 5,
    },
    {
      id: 2,
      name: "Iphone 6",
      price: 400,
      img:
        "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
      stars: 4,
    },
  ]);
  return (
    <ListIphoneContext.Provider value={{ listIphone }}>
      {props.children}
    </ListIphoneContext.Provider>
  );
}

export default StateIphone;
