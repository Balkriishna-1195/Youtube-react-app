import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "cricket",
    "movies",
    "songs",
    "soccer",
    "kabadi",
    "basketball",
    "news",
    "latest",
    "yoga",
    "meditation",
  ];

  return (
    <div className="flex">
      {list.map((l, i) => (
        <div key={i}>
          <Button name={l} />
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
