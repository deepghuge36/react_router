import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

function Names() {
  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItem] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const items = await data.json(); 
    items.map(item => (
        console.log(item.id)
      ))
    setItem(items)
}

  return (
      <div>
      {items.map(item => (
        <li key={item.id}>
        <Link to={`/details_page/${item.id}`}>
          {item.title}
        </Link>
        </li>
      ))}
      </div>
    );
}
export default Names;