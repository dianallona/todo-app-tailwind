import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [todoAddStr, setTodoAddStr] = useState("");
  const handleAddTodo = () => {
    if (todoAddStr === "") return;
    setTodo((prevState) => [...prevState, todoAddStr]);
    setTodoAddStr("");
  };

  const handleDeleteTodo = (index) => {
    setTodo((prevState) => prevState.filter((t, i) => i !== index));
  };

  const handleOnchangeTodoAddStr = (e) => {
    setTodoAddStr(e.target.value);
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center bg-yellow-500">
      <div className="w-1/3 h-3/4 bg-orange-600 rounded-xl shadow-xl overflow-scroll p-6 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100  scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <p className="text-6xl font-semibold text-center text-white mb-5">
          TODO
        </p>
        <div className="flex flex-row shadow-xl mb-10">
          <input
            className="shadow appearance-none border rounded-l-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Add your todo here.."
            value={todoAddStr}
            onChange={handleOnchangeTodoAddStr}
            autoFocus
          />
          <button
            className="hover:bg-blue-500 flex justify-center items-center w-10 bg-blue-600 rounded-r-lg"
            onClick={handleAddTodo}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
        {todo.map((t, i) => (
          <div
            key={`todo-${i}`}
            className="h-10 flex flex-row justify-between items-center bg-white rounded-md shadow-xl p-4 mb-2"
          >
            <p>{t}</p>
            <div className="hover:cursor-pointer flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hover:stroke-red-400  h-6 w-6 stroke-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => handleDeleteTodo(i)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
