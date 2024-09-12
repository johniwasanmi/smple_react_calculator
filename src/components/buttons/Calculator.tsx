import React, { useState } from "react";
import Button from "./Button";

const Calculator = () => {
  const [expression, setExpression] = useState<string>("");

  const handleClick = (value: string) => {
    if (value === "C") {
      setExpression(""); // Clear the expression
    } else if (value === "=") {
      try {
        setExpression(eval(expression)); // Evaluate the expression safely
      } catch (error) {
        setExpression("Error");
      }
    } else {
      setExpression((prev) => prev + value); // Append to the expression
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={expression} readOnly />
      </div>
      <div className="row row-cols-4 g-2">
        {["1", "2", "3", "+"].map((text) => (
          <Button key={text} text={text} clickHandler={handleClick} />
        ))}
        {["4", "5", "6", "-"].map((text) => (
          <Button key={text} text={text} clickHandler={handleClick} />
        ))}
        {["7", "8", "9", "/"].map((text) => (
          <Button key={text} text={text} clickHandler={handleClick} />
        ))}
        {["C", "0", ".", "="].map((text) => (
          <Button key={text} text={text} clickHandler={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
