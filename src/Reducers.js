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
          dateCreated: action.dateCreated,
        };
        return [newTodo, ...state];
      case "TOGGLE_TODO":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              dateCompleted: todo.dateCompleted ? null : Date(Date.now()),
              complete: true,
            };
          }
          return todo;
        })
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
