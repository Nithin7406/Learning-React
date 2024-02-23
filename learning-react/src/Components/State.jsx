import { useState } from "react";

// export default function State() {
//   //   let count = 0;
//   let [count, setCount] = useState(0);
//   function increment() {
//     // count++;
//     setCount(count + 5);
//     console.log(count);
//   }
//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

export default function Age() {
  let [age, setage] = useState(0);
  return (
    <div>
      <input type="date" value={age} onChange={(e) => setage(e.target.value)} />
      <div>{age >= 18 ? "Adult" : "Not an adult"}</div>
      <div>{age}</div>
    </div>
  );
}
