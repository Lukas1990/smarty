import React, {useState, useEffect} from 'react';
import AddTodo from "./AddTodo"
import ListTodo from "./ListTodo"

function TodoApp(props) {
  const {phrase} = props

  let savedItems = JSON.parse(localStorage.getItem("savedItems"))
  if (savedItems == null) savedItems = []

  const [items, setItems] = useState(savedItems)

  const handleItemSubmit = (item) => {
    setItems([...items, item])
  }
  const handleDeleteItem = (id) => {
    setItems(items.filter((item, index) => index != id))
  }

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(items))
  }, [items]);

  return (
<main>
  <div className="kontajner" id="zoznam_uloh">
    <ListTodo phrase={phrase} items={items} onDeleteItem={handleDeleteItem} />
    <AddTodo phrase={phrase} onItemSubmit={handleItemSubmit} />
  </div>
</main>
  );
}

export default TodoApp;