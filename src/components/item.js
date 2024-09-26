export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <div className="item">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <p style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </p>
      <span className="close" onClick={() => onDeleteItem(item.id)}>
        &#x2716;
      </span>
    </div>
  );
}
