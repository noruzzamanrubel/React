import React from "react";

import Card from "./components/Card";
import Heading from "./components/Heading";
import Data from "./data.json";
import { v4 as uuidv4 } from "uuid";
import ReactBootstrap from "./components/React_Bootstrap/ReactBootstrap";
import State from "./components/State";
import Index from "./components/Conditional_Rendering/Index";
import Onchange from "./components/Event_Handler/Onchange";
import Index2 from "./components/UseState/Index";
import Form from "./components/Form/Form";
import Child from "./components/State_Lifting/Child";
import Home from "./components/State_Lifting/Home";
import Toggle from "./components/Toggle/Toggle";
import FAQS from "./components/FAQS/FAQS";
import Timer from "./components/UseEffect/Timer";
import UseReduser from "./components/UseReducer/UseReduser";
import Componet1 from "./components/UseContext/Componet1";
// import DataFetch from "./components/UseEffect/DataFetch";

const App = () => {
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
  const data = "I am from Parent Component";
  const handleChildData = (data) => {
    // console.log(data);
  };
  return (
    <div className="main">
      <Heading />
      <ReactBootstrap />
      {items}
      <State />
      <Index />
      <Onchange />
      <Index2 />
      <Form />
      <Child data={data} onChildData={handleChildData} />
      <Home />
      <Toggle />
      <FAQS />
      <Timer />
      {/* <UseReduser /> */}
      {/* <DataFetch /> */}
      <Componet1 />
    </div>
  );
};

export default App;
