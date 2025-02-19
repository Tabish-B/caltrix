import React from "react";
import "./App.css";
import {
  FaPlus,
  FaTimes,
  FaDivide,
  FaMinus,
  FaCalculator,
  FaEquals,
} from "react-icons/fa";

function APP() {
  const [num1, setNum1] = React.useState(0);
  const [value, setValue] = React.useState("");
  const [operator, setOperator] = React.useState(null);

  function numberPressed(num) {
    setValue((prev) => prev.toString() + num.toString());
  }

  function handleOperator(op) {
    if (value === "") {
      return;
    }
    setNum1(Number(value));
    setOperator(op);
    setValue("");
  }

  function eq() {
    if (value === "" || operator === null || num1 === null) {
      return;
    }

    let result = 0;
    let num2 = Number(value);

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        return;
    }

    setValue(result.toString());
    setNum1(result);
    setOperator(null);
  }

  function resetInput() {
    setValue("0");
  }

  function resetResult() {
    setValue("0");
    setNum1(0);
    setOperator(null);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6 text-secondary">
      {/* Heading */}
      <div className="flex flex-row items-center justify-center text-2xl font-bold text-primary mb-4">
        Medium Powered Calculator <FaCalculator className="ml-2" />
      </div>

      {/* Result Area */}
      <div className="w-full max-w-xs bg-surface p-4 text-center text-xl font-mono rounded-lg shadow-md">
        {num1 !== 0 && operator ? `${num1} ${operator} ` : ""}
        {value !== "" ? value : ""}
      </div>

      {/* Numbers */}
      <div className="grid grid-cols-3 gap-4 mt-4 w-full max-w-xs">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            className="p-4 bg-primary text-background font-bold rounded-lg shadow-md hover:bg-opacity-80"
            onClick={() => numberPressed(num)}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Operators */}
      <div className="flex gap-4 mt-4">
        <button className="p-4 bg-accent text-background rounded-lg" onClick={() => handleOperator("+")}>
          <FaPlus />
        </button>
        <button className="p-4 bg-accent text-background rounded-lg" onClick={() => handleOperator("-")}>
          <FaMinus />
        </button>
        <button className="p-4 bg-accent text-background rounded-lg" onClick={() => handleOperator("/")}>
          <FaDivide />
        </button>
        <button className="p-4 bg-accent text-background rounded-lg" onClick={() => handleOperator("*")}>
          <FaTimes />
        </button>
      </div>

      {/* Equal and Reset Buttons */}
      <div className="flex gap-4 mt-4">
        <button className="p-4 bg-secondary text-background rounded-lg" onClick={eq}>
          <FaEquals />
        </button>
        <button className="p-4 bg-error text-white rounded-lg" onClick={resetResult}>
          Del
        </button>
        <button className="p-4 bg-error text-white rounded-lg" onClick={resetInput}>
          AC
        </button>
      </div>
    </div>
  );
}

export default APP;
