import {useReducer} from 'react';

import {v4 as uuid} from "uuid";
import UserBar from "./user/UserBar";
import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";

import appReducer from './Reducers';

import {StateContext} from './contexts';

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
        <StateContext.Provider value={{state, dispatch}}>
        <UserBar/>
        <TodoList/>
        {state.user && <CreateTodo/>}
        </StateContext.Provider>
      </div>
    )
}

export default App;
