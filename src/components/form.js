import React, { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setSDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);

    onAddItems(newItem);

    setSDescription("");
    setQuantity("");
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="sub_title">What do you need for your 😍 trip ?</p>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        <option>Select</option>
        {Array.from({ length: 20 }, (v, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        value={description}
        onChange={(e) => setSDescription(e.target.value)}
        placeholder="Item name..."
      />
      <button>Add</button>
    </form>
  );
}
