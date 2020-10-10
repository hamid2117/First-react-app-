import React from "react";
import ReactDom from "react-dom";
import Sdata from "./sdata";
import Cardhtml from "./card";
import './index.css'

const Mappower = (val) => {
  console.log(val)
  return (
      <Cardhtml

  imgnet={val.imgnet}
  sname={val.sname}
  title={val.title}
  link={val.link}
  />
  )
}

// const Firstfunction = () => {
//   return (
//     <Mappower {Sdata.map(Mappower)}/>
//   );
// };

ReactDom.render(<>
<h1 className="heading-style">List of top 5  Netflix series</h1> {Sdata.map(Mappower)}</>, document.getElementById("root"));
