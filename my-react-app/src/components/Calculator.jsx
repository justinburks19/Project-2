import { useState } from "react";
    const mathOperations = ['+', '-', '*', '/'];
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function Movies() {
    const [mathOperation, setMathOperation] = useState('');
    const [number, setNumber] = useState('');
    return (
        <div>
            <h1>Do It All Calculator</h1>
            <div>
                /* Display selected operation and number */
                {mathOperations.map((selectCalculation) => (
                    <button key={(selectCalculation)} onClick={() => setMathOperation(selectCalculation)}>
                        {selectCalculation}
                    </button>
                ))}
                {numbers.map((selectNumber) => (
                    <button key={(selectNumber)} onClick={() => setNumber(selectNumber)}>
                        {selectNumber}
                    </button>
                ))}
            </div>
        </div>
    )
}
        