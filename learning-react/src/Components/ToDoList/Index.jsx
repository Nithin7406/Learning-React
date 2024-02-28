import React, { useState } from "react";
import Input from "./Input";
import List from "./List";

export default function TodoList() {
  const [items, setItems] = useState([]);

  const [text, setText] = useState("");

  return (
    <div>
      <Input text={text} setText={setText} items={items} setItems={setItems} />
      <List items={items} />
    </div>
  );
}
