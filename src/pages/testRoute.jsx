import React, { useState } from "react";

const testRoute = () => {
  const [myArray, setMyArray] = useState([{ id: 1, name: "John" }, { id: 2, name: "Jane" }]);

  function updateName(id, newName) {
    setMyArray(prevArray => prevArray.map(obj => {
      console.log('before updation', prevArray);
      if (obj.id === id) {
        console.log('randika obj =>',obj);
        // console.log('updated =>', myArray);
        obj.name = newName
        return { ...obj };
      } else {
        return obj;
      }
    }));
    console.log('updated =>', myArray);
  }
  return (
    <div>
      <p></p>
       <button onClick={() => updateName(1, "Johnny")}>Update name</button>
    </div>
  )
}

export default testRoute


