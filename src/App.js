import React from "react";
import Card from "./components/Card";
import Heading from "./components/Heading";
import Data from "./data.json";
import { v4 as uuidv4 } from "uuid";
import ReactBootstrap from "./components/React_Bootstrap/ReactBootstrap";

function App() {
    console.log(uuidv4());
  let items = [];
  //   for (let x = 0; x < Data.length; x++) {
  //     items.push(
  //       <Card
  //         cardTitle={Data[x].title}
  //         cardDesc={Data[x].desc}
  //         cardBtn={Data[x].btn}
  //       />
  //     );
  //   }

//   items = Data.map((item, index) => (
//     <Card
//       key={index}
//       cardTitle={item.title}
//       cardDesc={item.desc}
//       cardBtn={item.btn}
//     />
//   ));
    //data maping with unique id
  items = Data.map((item) => (
    <Card
      key={uuidv4()}
      cardTitle={item.title}
      cardDesc={item.desc}
      cardBtn={item.btn}
    />
  ));

  return (
    <div className="main">
      <Heading />
      <ReactBootstrap />
      {items}
    </div>
  );
}
export default App;
