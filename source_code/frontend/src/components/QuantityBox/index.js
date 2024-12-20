import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import Button from "@mui/material/Button";
import { useState } from "react";

const QuantityBox = () => {

  const [inputValue, setInputValue] = useState(1);

  const plusValue = () => {
    setInputValue(inputValue + 1);
  }
  const minusValue = () => {
    if(inputValue>1) setInputValue(inputValue-1);

  }
  return (
    <>
      <div className="quantityDrop d-flex align-items-center ">
        <Button onClick={minusValue}>
          <LuMinus />
        </Button>
        <input type="text" value={inputValue}></input>
        <Button onClick={plusValue}>
          <LuPlus />
        </Button>
      </div>
    </>
  );
};

export default QuantityBox;
