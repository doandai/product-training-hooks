import React, { Fragment, useContext } from "react";
import Search from "./Search";
import Sort from "./Sort";
import { ListIphoneContext } from "../context/StateIphone";

function Control() {
  const { listIphone } = useContext(ListIphoneContext);
  return (
    <Fragment>
      <Search />
      <Sort />
    </Fragment>
  );
}
export default Control;
