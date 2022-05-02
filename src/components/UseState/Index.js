import React, { useState } from "react";

const Index2 = () => {
  
  const [count, TestCount] = useState(0);

  const Incremant = () => {
    TestCount(count + 1);
  };
  const Decremant = () => {
    TestCount(count - 1);
  };
  return (
    <div>
      <h1>Count2 : {count}</h1>
      <button className="count_btn" onClick={Incremant}>
        +
      </button>
      <button className="count_btn" onClick={Decremant}>
        -
      </button>
    </div>
  );
};
export default Index2;
