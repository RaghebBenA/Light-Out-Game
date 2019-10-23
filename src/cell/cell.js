import React from "react";
import "./cell.scss";

export default function Cell({ cellLit, flipCell }) {
 


  return <td className={!cellLit ? "cell" : "cell-light"} onClick={flipCell} />;
}
