import React, { useState } from "react";

// Composant pour le compteur
function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(curr => curr + 1);
  }

  function decrement() {
    setCount(curr => curr - 1);
  }

  return (
    <div className="counter">
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>Count : {count}</p>
    </div>
  );
}

// Composant pour le champ de texte en direct
function TextInput() {
  const [text, setText] = useState("");

  function handleTextChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="text-input">
      <input type="text" value={text} onChange={handleTextChange} />
      <p>Texte en direct : {text}</p>
    </div>
  );
}

export {Counter};
