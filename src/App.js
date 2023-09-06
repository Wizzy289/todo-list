import React, { useState } from "react";
import './app.css'


function App() {
  const [newItem, setnewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Enter an item...")
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }

    setItems(oldList => [...oldList, item]);

    setnewItem("");
  }

  function deleteItem(id) {
      const newarray = items.filter(item => item.id !== id);
      setItems(newarray);
  }

  return (

    <div className="App">
      <h1>To-do List App</h1>

      <input type="text" placeholder="Add an item..." value={newItem}
        onChange={e => setnewItem(e.target.value)} />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map(item => {
          return (
            <li key={item.id}> {item.value} <button onClick={() => deleteItem(item.id)}>Remove</button></li>
          )
        }
        )}
      </ul> 
    </div>
  );
}

export default App;
