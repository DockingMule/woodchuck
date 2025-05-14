import { useState } from "react";

export default function RemoveByIdForm({ onRemove }) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = parseInt(input, 10);
    if (!isNaN(id)) {
      onRemove(id);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: 16 }}>
      <input
        type="number"
        placeholder="Remove by ID"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: 120, marginRight: 8 }}
      />
      <button type="submit">Remove</button>
    </form>
  );
}
