import React, { useState } from "react";

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function NumberPrinter() {
  const [numElements, setNumElements] = useState("");
  const [numbers, setNumbers] = useState([]);

  const handleChange = (event) => {
    setNumElements(event.target.value);
  };

  const generateNumbers = () => {
    const num = parseInt(numElements);
    const generatedNumbers = [];

    for (let i = 1; i <= num; i++) {
      generatedNumbers.push(i);
    }

    setNumbers(generatedNumbers);
  };

  const numberBlocks = numbers.map((number, index) => {
    const numberStyle = {
      display: "inline-block",
      width: "50px",
      height: "50px",
      textAlign: "center",
      lineHeight: "50px",
      margin: "2px",
      backgroundColor: isPrime(number)
        ? "#FF004C"
        : number % 2 === 0
        ? "#FFE600"
        : "#00B2FF",
    };

    return (
      <div key={index} className="number" style={numberStyle}>
        {number}
      </div>
    );
  });

  return (
    <div>
      <input
        type="number"
        value={numElements}
        onChange={handleChange}
        placeholder="Enter number of elements"
      />
      <button onClick={generateNumbers}>Generate Numbers</button>

      <div className="number-blocks">{numberBlocks}</div>
    </div>
  );
}

export default NumberPrinter;
