function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function NumberGrid() {
  const N = 100;
  const numRows = Math.ceil(N / 6);

  const grid = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];

    for (let j = 1; j <= 6; j++) {
      const number = i * 6 + j; // Calculate the number for the cell
      if (number > N) break; // Stop if we reach N

      const numberStyle = {
        display: "inline-block",
        width: "50px",
        height: "50px",
        textAlign: "center",
        lineHeight: "50px",
        margin: "2px",
        backgroundColor: number % 2 === 0 ? "lightgreen" : "yellow",
      };

      if (isPrime(number)) {
        numberStyle.backgroundColor = "red";
      }

      row.push(
        <div key={number} className="number" style={numberStyle}>
          {number}
        </div>
      );
    }

    grid.push(
      <div key={i} className="row">
        {row}
      </div>
    );
  }

  return <div id="container">{grid}</div>;
}

export default NumberGrid;
