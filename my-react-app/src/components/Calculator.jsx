import { useState } from "react";
    //Set up what is displayed on the calculator
    const mathOperations = ['+', '-', '*', '/', '=', '.', 'C'];
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    const backSpace = ['<-']
    const negative = ['+/-']
    const history = []

export function Calculator() {
    const [inputValue, setInputValue] = useState('');
    const [final, setFinal] = useState('');
    //Handle button clicks for calculator functionality

    function handleButtonClick(value) {
        // Clear input if 'C' is pressed, evaluate expression if '=' is pressed, otherwise append value
        // Handle for mutple operations for last operation
        if (value === 'C') {
            setInputValue('');
            setFinal('');
        } else if (value === '=') {
            // Evaluate the expression
            try {
                setInputValue(eval(inputValue).toString());
                history.push(inputValue + '=' + eval(inputValue).toString());
                setFinal(eval(inputValue).toString());
            } catch {
                setInputValue('Error');
            }
            // Prevent multiple consecutive operations, works by checking if last character is an operation
        } else if (mathOperations.includes(value) && mathOperations.includes(inputValue.slice(-1))) {
            setInputValue((prev) => prev.slice(0, -1) + value);
        } else {
            setInputValue((prev) => prev + value);
        }
    }
    return (
        <>
            <HandleCalc final={final} inputValue={inputValue} handleButtonClick={handleButtonClick} setInputValue={setInputValue} />
            <ViewHistory alert={alert} />
        </>
    )
}

    function HandleCalc({final, inputValue, handleButtonClick, setInputValue}) {
      return (<div>
            <h1>Do It All Calculator</h1>
            {
    /* Display what is pressed and then output final result */
  }
            <label type="digit" className="border-4 bigger m-1">{final}</label>
            <br />
            <label type="text" className="border-4">{inputValue}</label>
            <div className="row d-flex flex-row">
            {
      /* Render my math operations */
    }
            {mathOperations.map(item => <button key={item} className="btn-group border-4 col-4 " onClick={() => handleButtonClick(item)}>{item}</button>)}
            {
      /* Render my numbers */
    }
            {numbers.map(num => <button key={num} className="btn-group border-4 col-4 " onClick={() => handleButtonClick(num)}>{num}</button>)}
            {
      /* Render my backspace */
    }
            {backSpace.map(item => <button key={item} className="btn-group border-4 col-4 " onClick={() => setInputValue(prev => prev.slice(0, -1))}>{item}</button>)}
            {
      /* Render my negative button */
    }
            {negative.map(item => <button key={item} className="btn-group border-4 col-4 " onClick={() => setInputValue(prev => prev ? (parseFloat(prev) * -1).toString() : '-')}>{item}</button>)}
            </div>
            {
    /* Button to view history of calculations */
  }             
        </div>);
    }
    //Button to view history of calculations
    function ViewHistory({alert}) {
      return (
      <div className="d-flex justify-content-center">
      <button className="btn btn-primary m-2 d-flex justify-content-center" onClick={() => alert(history.length ? history.join('\n') : 'No history yet!')}>
    { 'View History' }
      </button>
      </div>
    );
    }
      
