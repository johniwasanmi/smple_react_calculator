import React, { useState } from "react";
import Button from "../buttons/Button";
import Screen from "../screen/Screen";
const CalcBody = () => {
  const [text, setText] = useState("");
  const clickButton = (event: string) => {
    if (event === "C") {
      setText("");
    } else if (event === "=") {
      try {
        setText(eval(text));
      } catch (error) {
        setText("invalid Input");
      }
    } else {
      setText((prev) => prev + event);
    }
  };
  return (
    <div className="card col-sm-6 " style={{ marginLeft: "300px" }}>
      <div className="card-header">
        <Screen input={text} />
      </div>
      <div className="card-body">
        <div className="" style={{ border: "solid, black" }}>
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            {["1", "2", "3", "C"].map((text) => (
              <Button
                key={text}
                text={text}
                clickHandler={clickButton}
              ></Button>
            ))}
          </div>
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            {["4", "5", "6", "+"].map((text) => (
              <Button
                text={text}
                key={text}
                clickHandler={clickButton}
              ></Button>
            ))}
          </div>
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            {["7", "8", "9", "/"].map((text) => (
              <Button
                key={text}
                text={text}
                clickHandler={clickButton}
              ></Button>
            ))}
          </div>
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            {["0", ".", "*", "="].map((text) => (
              <Button
                key={text}
                text={text}
                clickHandler={clickButton}
              ></Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalcBody;
