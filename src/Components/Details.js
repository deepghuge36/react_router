import React, { useEffect, useState } from 'react';

function Details({match}) {
  useEffect(() => {
    fetchItem();
    // console.log(match)
   },[]);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/todos/${match.params.id}`);
    const item = await fetchItem.json();
    setItem(item)
    console.log(item)
    
  }


  return (
    <div >
      <h1>you selected {item.id}</h1>
      <p>your title is {item.title} </p>
      <p>user id is {item.userId}</p>
    </div>
  )
}
export default Details;