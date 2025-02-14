import React from "react";
import './App.css'

import { FaPlus, FaTimes, FaDivide, FaMinus, FaCalculator } from "react-icons/fa";

function App() {

  const [count, setCount] = React.useState(0)
  const [result, setResult] = React.useState("")

  function Listener(e) {
    setResult(e.target.value)
  }

  function Add() {
    setCount(count + Number(result))
  }

  function Subtract() {
    setCount(count - Number(result))
  }

  function Divide() {
    setCount(count / Number(result))
  }

  function Multiply() {
    setCount(count * Number(result))
  }

  function resetInput() {
    setResult("")
  }

  function resetResult() {
    setCount(Number (0))
  }

  return (
    <div className="min-h-screen w-full bg-surface flex flex-col items-center justify-center">
     
     <div className="text-accent mb-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Simple <u>Calculator</u> <FaCalculator className="inline-block" />
      </div>

      <div className="min-h-12 max-h-20 p-6 m-6 mb-12 text-secondary text-xs sm:text-sm md:text-base lg:text-2xl font-bold flex items-center">
        Result =
        <div className="ml-2 p-6 bg-background text-accent rounded">
          {count}
        </div>
      </div>
    

      <div >
        <input type="number" placeholder="Enter Value" onChange={Listener} value={result} 
        className="min-h-12 p-6 m-6 bg-accent text-background text-xs sm:text-sm md:text-base lg:text-2xl font-bold rounded flex items-center" />
      </div>

      <div className="border-2 border-background rounded-lg p-6 m-6 flex flex-col items-center">
      <div className="operation-buttons">
        <button onClick={Add} id="Add" className="min-w-12 min-h-12 max-w-20 max-h-20 p-6 m-6 rounded-full bg-white hover:bg-blue-300 text-text active:scale-95 transition" ><FaPlus className="text-xs sm:text-sm md:text-base lg:text-base" /></button>
        <button onClick={Subtract} id="Subtract" className="min-w-12 min-h-12 max-w-20 max-h-20 p-6 m-6 rounded-full bg-white hover:bg-blue-300 text-text active:scale-95 transition" ><FaMinus className="text-xs sm:text-sm md:text-base lg:text-base" /></button>
        <button onClick={Multiply} id="Multiply" className="min-w-12 min-h-12 max-w-20 max-h-20 p-6 m-6 rounded-full bg-white hover:bg-blue-300 text-text active:scale-95 transition"> <FaTimes className="text-xs sm:text-sm md:text-base lg:text-base" /></button>
        <button onClick={Divide} id="Divide" className="min-w-12 min-h-12 max-w-20 max-h-20 p-6 m-6 rounded-full bg-white hover:bg-blue-300 text-text active:scale-95 transition"><FaDivide className="text-xs sm:text-sm md:text-base lg:text-base" /></button>
      </div>
   
        <div className="reset-buttons border-2 border-background rounded-lg mt-6 flex flex-row">
        <button onClick={resetInput} id="resetInput" className="min-w-12 min-h-12 max-w-20 max-h-20 p-6 m-6 rounded-[40%] bg-white hover:bg-blue-300 text-text text-xs sm:text-sm md:text-base lg:text-base font-bold flex items-center justify-center">Del</button>
        <button onClick={resetResult} id="resetResult" className="min-w-12 min-h-12 max-w-20 max-h-20 p-6 m-6 rounded-[40%] bg-white hover:bg-blue-300 text-text text-xs sm:text-sm md:text-base lg:text-base font-bold flex items-center justify-center">AC</button>
      </div>
    </div>

    </div>
  )
}

export default App
