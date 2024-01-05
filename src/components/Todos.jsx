import { useSelector, useDispatch } from "react-redux";
import { removetodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  
  return (
    <>
      <div>todos</div>
      {todos.map((todo) => {
        
        <li key={todo.id}>
          {todo.text}
          {console.log(todo.text)}
          <button onClick={()=>dispatch(removetodo(todo.id))}> X</button>
        </li>;
        
      })}
    </>
  );
}

export default Todos;
