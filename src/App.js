import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {

  const [newItem, setNewItem] = useState("")
  const [items,setItems] = useState([])
  const [editingItemId, setEditingItemId] = useState(null);

  const addItem = () => {
      const item = {
      id:Math.floor(Math.random()*1000),
      value:newItem
      }
      setItems(oldItems => [...oldItems,item])
      setNewItem("")
  }

  const deleteItem = (id) => {
      const newArray= items.filter(item => item.id !== id)
      setItems(newArray)
  }

  const editItem = id => {
    setEditingItemId(id);
    const itemToEdit = items.find(item => item.id === id);
    if (itemToEdit) {
      setNewItem(itemToEdit.value);
    }
  };

  const updateItem = () => {
    const updatedItems = items.map(item =>
      item.id === editingItemId ? { ...item, value: newItem } : item
    );
    setItems(updatedItems);
    setEditingItemId(null);
    setNewItem('');
  };

  return (
    <div className='App'>
      <h1>Todo List</h1>


      <input
        type='text'
        placeholder='Yapıcaklarını Ekle'
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}

      />


      <button onClick={()=> addItem()}>Ekle</button>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {editingItemId === item.id ? (
              <input
                type='text'
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
              />
            ) : (
              item.value
            )}

            {editingItemId === item.id ? (
              <button onClick={() => updateItem()}>Save</button>
            ) : (
              <button onClick={() => editItem(item.id)}>Edit</button>
            )}

            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App