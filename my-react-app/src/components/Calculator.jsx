import { useState } from "react";
import "../styles/Calculator.css";
import {motion} from "framer-motion";
import { useSize } from "../helpers/size.jsx";
import pumpkin from '../assets/pumpkin-2341.svg';
//Set up what is displayed on the calculator
const mathOperations = ["+", "-", "*", "/",  ".", "C", "="];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const backSpace = ["<--- BackSpace"];
const negative = ["Flip"];
const history = [];
export function Calculator() {
  const [inputValue, setInputValue] = useState("");
  const [final, setFinal] = useState("");
  //Handle button clicks for calculator functionality
  function handleButtonClick(value) {
    // Clear input if 'C' is pressed, evaluate expression if '=' is pressed, otherwise append value
    // Handle for mutple operations for last operation
    if (value === "C") {
      setInputValue("");
      setFinal("");
    } else if (value === "=") {
      // Evaluate the expression
      try {
        setInputValue(eval(inputValue).toString());
        history.push(inputValue + "=" + eval(inputValue).toString());
        setFinal(eval(inputValue).toString());
      } catch {
        setInputValue("Error");
      }
      // Prevent multiple consecutive operations, works by checking if last character is an operation
    } else if (
      mathOperations.includes(value) &&
      mathOperations.includes(inputValue.slice(-1))
    ) {
      setInputValue((prev) => prev.slice(0, -1) + value);
    } else {
      setInputValue((prev) => prev + value);
    }
  }
  return (
    <>
      <div>
        <HandleCalc
          final={final}
          inputValue={inputValue}
          handleButtonClick={handleButtonClick}
          setInputValue={setInputValue}
        />
        <ViewHistory alert={alert} />
      </div>
    </>
  );
}

function HandleCalc({ final, inputValue, handleButtonClick, setInputValue }) {
  const b = useSize();
  return (
    <div
      ref={b.containerRef}
      className="calculator-container border-4 p-2 border-warning row d-flex">
      <motion.h1
      ref={b.itemRef}
        style={{whiteSpace: 'nowrap',
          display: 'inline-block'
        }}
        initial={{filter: "drop-shadow(0 0 0px #ff8800)", x:0, rotate:0 }}
        animate={{filter: ["drop-shadow(0 0 clamp(1px, 60px, 80px) #ff8800)", "drop-shadow(0 0 clamp(1px, 30px, 50px) #66ff00b7)"] , 
          x: [0,b.maxX], rotate: [0,360]}}
        transition={{
          duration: 3, repeat: Infinity, repeatType: "mirror", ease:"easeOut"}}
        className="d-flex justify-content-center col-1 text-warning m-0 p-2">

          <img src={pumpkin} alt="H" width={100} height={100} className="pumpkin" />

        </motion.h1>
      {/* Display what is pressed and then output final result */}
      <label type="digit" 
      className="border-4 m-0 d-flex justify-content-center"
      style={{borderRadius: "20px", fontSize:'clamp(1rem, 2rem, 3rem)'}}>      
        {final}
      </label>
      <br />

      <label type="text" 
      className=" d-flex justify-content-center m-1 "
      style={{fontSize:'clamp(1rem, 1.8rem, 2rem)'}}>
        {inputValue}
      </label>

      <div className="container text">
        {/* Render my negative/positive button */}
        <div 
        className="row col-6 d-flex flex-wrap justify-content-center">
        {negative.map((item) => (
          <button
            key={item}
            className="btn-group border-4 col-sm-8 col-md-8 col-lg-8 start-50 justify-content-center p-2 m-1 text-bg-success flip"
            onClick={() =>
              setInputValue((prev) =>
                prev ? (parseFloat(prev) * -1).toString() : "-"
              )
            }
            style={{ zIndex: 100000 }}
          >
            {item}
          </button>
        ))}
        </div>

        <div className="row col-6 d-flex  justify-content-center g-1` ">
        {/* Render my numbers */}
        {numbers.map((num) => (
          <button
            key={num}
            className="btn-group border-4 col-3 start-50 justify-content-center p-2 m-1 text-bg-danger"
            onClick={() => handleButtonClick(num)}
            style={{ zIndex: 100000, fontSize: 'clamp(10px, 1vw, 20px)' }}
          >
            {num}
          </button>
        ))}
        </div>

        <div className="row col-6 justify-content-center d-flex">
        {/* Render my math operations */}
        {mathOperations.map((item) => (
          <button
            key={item}
            className="btn-group border-4 col-sm-4 col-md-4 col-lg-4 start-50 justify-content-center p-3 m-1 text-bg-danger"
            onClick={() => handleButtonClick(item)}
            style={{ zIndex: 100000 }}
          >
            {item}
          </button>
        ))}
        </div>
        


        <div className="row col-6 justify-content-center d-flex flex-wrap">
        {/* Render my backspace button */}
        {backSpace.map((item) => (
          <button
            key={item}
            className="btn-group border-4 col-lg-8 col-sm-8 col-md-8 start-50 justify-content-center p-3 m-2 text-bg-success"
            onClick={() => setInputValue((prev) => prev.slice(0, -1))}
            style={{ zIndex: 100000, fontSize: 'clamp(10px, 1vw, 20px)' }}
          >
            {item}
          </button>
        ))}
        </div>


      </div>
      {/* Button to view history of calculations */}
    </div>
  );
}
//Button to view history of calculations
function ViewHistory({ alert }) {
  return (
    <div className="d-flex justify-content-center">
      <button
        className="btn btn-primary m-2 d-flex justify-content-center"
        style={{ zIndex: 100000 }}
        onClick={() =>
          alert(history.length ? history.join("\n") : "No history yet!")
        }
      >
        {"View History"}
      </button>
    </div>
  );
}
