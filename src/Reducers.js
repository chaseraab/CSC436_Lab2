import { isValidDateValue } from "@testing-library/user-event/dist/utils";

function userReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
      case "REGISTER":
        return action.username;
      case "LOGOUT":
        return "";
      default:
        return state;
    }
  }

  export function todosReducer(state, action) {
    switch (action.type) {
      case "CREATE_TODO":
        const newTodo = {
          id: action.id,
          title: action.title,
          description: action.description,
          author: action.author,
        };
        return [newTodo, ...state];
      case "TOGGLE_TODO":
          console.log("Toggle!");
          const index = state.findIndex(todo => todo.id === action.id)
          var newArray = state
          newArray[index].dateCompleted = Date(Date.now());
          return newArray
      case "DELETE_TODO":
          return state.filter(todo => todo.id !== action.id);
      default:
        return state;
    }
  }

  export default function appReducer (state, action) {
    return {
            user: userReducer(state.user, action),
            todos: todosReducer(state.todos, action)
            };
        }
