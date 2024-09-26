import React, { useState } from "react";
import Header from "./components/header";
import Form from "./components/form";
import PackingList from "./components/packingList";
import Statistics from "./components/stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(itm) {
    setItems((items) => [...items, itm]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="main">
      <div className="container">
        <Header />
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        />
        <Statistics items={items} />
      </div>
    </div>
  );
}
