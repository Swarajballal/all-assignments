// import { useState } from "react";

// function CreateTodo() {
//   const [todos, setTodos] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const addTodo = () => {
//     fetch("http://localhost:3000/todos", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ title: title, description: description }),
//     }).then((response) => {
//       if (response.ok) {
//         response.json().then((data) => {
//           setTodos((prevTodos) => [...prevTodos, data]);
//         });
//       }
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={addTodo}>
//         <input
//           type="text"
//           value={title}
//           onChange={(event) => setTitle(event.target.value)}
//         />
//         <input
//           type="text"
//           value={description}
//           onChange={(event) => setDescription(event.target.value)}
//         />
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// }

// export default CreateTodo;

// using axios

import { useState, useEffect } from "react";
import axios from "axios";

function CreateTodo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    axios
      .post("http://localhost:3000/todos", {
        title: title,
        description: description,
      })
      .then((response) => {
        if (response.status === 200) {
          setTodos((prevTodos) => [...prevTodos, response.data]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateTodo;
