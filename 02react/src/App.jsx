import { useState } from "react";
import "./App.css";

function App() {
  // add to the list

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    // {
    //  text: todo , color: setcolor
    // }
  ]);
  const [color, setcolor] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
    console.log("item Cadded");
  };

  console.log("todos", todos, "todo", todo);

  // remove from the list

  const remTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
    console.log("removed");
  };

  //completed

  const handleComplete = (colors) => {
    const newColor = todos.filter((color) => {
      return color !== colors;
    });
    setcolor(newColor);
    console.log("work complete");
  };

  return (
    <>
      <div className=" bg-[#ecdcf7] flex flex-col justify-center items-center w-screen h-screen">
        <div className=" text-3xl p-5 font-serif font-bold "> Todo List </div>

        <div className="flex  p-3 space-x-6 ">
          <div>
            <form action="">
              <input
                type="text"
                name="todo"
                value={todo}
                className=" text-center text-lg bg-slate-50 shadow-xl shadow-black-550/50 w-50 h-9 p-1 rounded-md "
                placeholder="enter the list item"
                onChange={(e) => setTodo(e.target.value)}
              />
            </form>
          </div>
          <div>
            <button
              className=" bg-[#fff] border-none font-semibold shadow-xl shadow-black-550/50 w-20 h-9 p-1 rounded-md hover:bg-[#6d5091] hover:text-[#fff] hover:font-bold "
              onClick={addTodo}
            >
              Add item
            </button>
          </div>
        </div>

        <div className="w-[350px] bg-white shadow-xl shadow-black-550/50 rounded-xl text-lg p-3 ">
          <ul>
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex items-center justify-between text-xl font-bold hover:bg-[#eee6f2] rounded-md p-2"
                style={{ backgroundColor: color }}
              >
                {todo}
                <div className="space-x-2 ml-2">
                  <button
                    className="p-1 rounded-lg "
                    onClick={() => handleComplete("green")}
                  >
                    ✔️
                  </button>
                  <button
                    className="p-1 rounded-lg "
                    onClick={() => handleComplete("orange")}
                  >
                    ❌
                  </button>
                  <button
                    className="p-1 rounded-lg "
                    onClick={() => {
                      remTodo(todo);
                    }}
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap space-x-4 ">
          <p className="text-green-500 text-lg font-bold underline decoration-solid  ">
            Task completed{" "}
          </p>
          <p className=" text-orange-300 text-lg font-bold underline decoration-solid ">
            Yet to complete{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
