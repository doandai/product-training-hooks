import React, { createContext, useState } from "react";

export const ListIphoneContext = createContext();
function StateIphone(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
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
    {
      id: 3,
      name: "Iphone 7",
      price: 600,
      img:
        "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
      stars: 4,
    },
  ]);
  const searchTextI = (key) => {
    setPrice();
    if (key) {
      setTitle(
        listIphone.filter((text) => {
          return text.name.toLocaleLowerCase().indexOf(key) !== -1;
        })
      );
    } else {
      setTitle("");
    }
  };

  const sortPriceI = (sort) => {
    sort = parseInt(sort);

    if (sort) {
      const sortListIphone = [...listIphone];
      if (sort === 1) {
        setPrice(
          sortListIphone.filter((item) => {
            return item;
          })
        );
      } else if (sort === 2) {
        setPrice(
          sortListIphone.sort(function (a, b) {
            return a.price - b.price;
          })
        );
      } else if (sort === 3) {
        setPrice(
          sortListIphone.sort(function (a, b) {
            return b.price - a.price;
          })
        );
      }
    } else {
      setPrice();
    }
  };
  return (
    <ListIphoneContext.Provider
      value={{ listIphone, searchTextI, title, sortPriceI, price }}
    >
      {props.children}
    </ListIphoneContext.Provider>
  );
}

export default StateIphone;
