import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../features/todo/todoSlice";

function Addtodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
   
    dispatch(addtodo(input));
    setInput("");
  };
  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          className=""
          placeholder="Add a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          Add todo
        </button>
      </form>
    </div>
  );
}

export default Addtodo;

