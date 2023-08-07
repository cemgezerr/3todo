import React from 'react'
import { useState } from 'react'

const App = () => {

  const [newItem, setNewItem] = useState("");

  const [items, setItems] = useState([]);

  const addItem = () => {

    if (newItem === "") {
      alert("boş bırakılamaz")
      return
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }
    setItems(dizi => [...dizi, item])
    setNewItem("")
  }
  const deleteItems = (id) => {
    const newArray = items.filter(item =>  item.id !== id)
      setItems(newArray);
    }
  

  return (
    <div>
      <h1>Todo List App</h1>


      <input
        type='text'
        placeholder='yapıcaklarını ekle'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}

      />


      <button onClick={() => addItem()}>Add</button>


      <ul>
          {items.map((item) => {
            return(
              <li key={item.id}>{item.value} <button onClick={()=> deleteItems(item.id)}>Sil</button></li>
              )
          })}
      </ul>

    </div>
  )
}

export default App