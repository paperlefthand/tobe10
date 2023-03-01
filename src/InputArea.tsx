import React, { useState, useEffect } from "react";
import { Operator } from "./Operator";
import { calculate } from "./calculate";

type Op = "plus" | "minus" | "multiply" | "divide" | "none";

const num1 = 1 + Math.floor(Math.random() * 9);
const num2 = 1 + Math.floor(Math.random() * 9);
const num3 = 1 + Math.floor(Math.random() * 9);
const num4 = 1 + Math.floor(Math.random() * 9);

export const InputArea = () => {
  const [op1, setOp1] = useState("none" as Op);
  const [op2, setOp2] = useState("none" as Op);
  const [op3, setOp3] = useState("none" as Op);

  useEffect(() => {
    const equal = document.getElementById("equal");
    const result = calculate([num1, num2, num3, num4], [op1, op2, op3]);
    if (result === 10) {
      equal.style.color = "green";
    } else {
      equal.style.color = "red";
    }
  });

  const onOperator1Change = (ope: Op) => {
    setOp1(ope);
  };
  const onOperator2Change = (ope: Op) => {
    setOp2(ope);
  };
  const onOperator3Change = (ope: Op) => {
    setOp3(ope);
  };

  return (
    <div>
      {num1}
      <Operator name="op1" onOperatorChange={onOperator1Change} />
      {num2}
      <Operator name="op2" onOperatorChange={onOperator2Change} />
      {num3}
      <Operator name="op3" onOperatorChange={onOperator3Change} />
      {num4}
      <span id="equal">=</span>10
    </div>
  );
};
