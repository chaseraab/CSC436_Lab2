import {useReducer} from 'react';

import {v4 as uuid} from "uuid";
import UserBar from "./user/UserBar";
import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";

import appReducer from './Reducers';

function App() {

  const initialTodos = [
    {
      id: uuid(),
      title: "Take out the trash.",
      description: "It smells",
      author: "Chase",
      dateCreated: Date(Date.now()),
      complete: false
    },
    {
      id: uuid(),
      title: "Feed the cats.",
      description: "They're hungry",
      author: "Chase",
      dateCreated: Date(Date.now()),
      complete: false
    }
  ]

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: initialTodos })

    return (
      <div>
        <UserBar user={state.user} dispatch={dispatch} />
        <TodoList todos={state.todos} />
        {state.user && <CreateTodo user={state.user} todos={state.todos} dispatch={dispatch}/>}
      </div>
    )
}

export default App;
