import { useRef } from "react";

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.border = "30px solid red";
  }

  function handleBlur() {
    inputRef.current.blur();
    inputRef.current.style.border = null;
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
      <button onClick={handleBlur}>Blur the input</button>
    </>
  );
}
