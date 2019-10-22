import React from "react";
import "./cell.scss";

export default function Cell({ cellLit, flipCell }) {
    const handelClick = () =>{
         flipCell()
    }
  return <td className={!cellLit ? "cell" : "cell-light"} onClick={handelClick} />;
}
