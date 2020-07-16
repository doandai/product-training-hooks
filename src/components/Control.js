import React, { useContext } from "react";
import Search from "./Search";
import Sort from "./Sort";
import { ListIphoneContext } from "../context/StateIphone";

function Control() {
  const { listIphone } = useContext(ListIphoneContext);

  return (
    <div className="control">
      <Search />
      <Sort />
    </div>
  );
}
export default Control;
