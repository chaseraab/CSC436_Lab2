import {useReducer, useEffect} from 'react';
import { useResource } from 'react-request-hook'
import UserBar from "./user/UserBar";
import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";

import appReducer from './Reducers';

import {StateContext} from './contexts';

function App() {

  const initialTodos = [
    // {
    //   id: uuid(),
    //   title: "Take out the trash.",
    //   description: "It smells",
    //   author: "Chase",
    //   dateCreated: Date(Date.now()),
    //   complete: false
    // },
    // {
    //   id: uuid(),
    //   title: "Feed the cats.",
    //   description: "They're hungry",
    //   author: "Chase",
    //   dateCreated: Date(Date.now()),
    //   complete: false
    // }
  ]

  // useEffect(() => {
  //   fetch('/api/todos')
  //          .then(result => result.json())
  //          .then(todos => dispatch({ type: 'FETCH_TODOS', todos }))
  //   }, [])

  const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
        dispatch({ type: 'FETCH_TODOS', todos: todos.data.reverse() })
    }
  }, [todos])
 

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
