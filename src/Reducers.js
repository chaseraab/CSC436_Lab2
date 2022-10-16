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

  function todosReducer(state, action) {
    switch (action.type) {
      case "CREATE_TODO":
        const newPost = {
          title: action.title,
          description: action.description,
          author: action.author,
          dispatch: action.dispatch,
        };
        return [newPost, ...state];
      case "TOGGLE_TODO":
          console.log("Toggle!");
          return state;
      case "DELETE_TODO":
          console.log("Delete");
          return state;
        //return state.filter(todo => todo !== action.todo);
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
