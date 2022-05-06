import React from "react";

const Child = (props) => {
  const data = "I am from Child Component";
  props.onChildData(data);
  return (
    <div>
      <p>{props.data}</p>
    </div>
  );
};

export default Child;
