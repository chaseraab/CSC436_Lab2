import {useState} from 'react';
import {v4 as uuid} from "uuid";
import UserBar from "./user/UserBar";
import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";

function App() {

  const initialTodos = [
    {
      id: uuid(),
      title: "Take out the trash.",
      description: "It smells",
      author: "Chase",
      dateCreated: Date(Date.now()),
      //complete: false
    },
    {
      id: uuid(),
      title: "Feed the cats.",
      description: "They're hungry",
      author: "Chase",
      dateCreated: Date(Date.now()),
      //complete: false
    }
  ]

  const [user, setUser] = useState('')
  const [todos, setTodos] = useState(initialTodos)

    return (
      <div>
        <UserBar user={user} setUser={setUser} />
        <TodoList todos={todos} />
        {user && <CreateTodo user={user} todos={todos} setTodos={setTodos}/>}
      </div>
    )
}

export default App;
