import { useResource } from 'react-request-hook';
export default function Todo ({title, description, author, dateCreated, dispatch, id, complete, dateCompleted}) {

    

    const [del , deleteTodo ] = useResource((id) => ({
        url: '/todos/' + id,
        method: 'DELETE'
        //data: id
    }));

    const [put , updateTodo ] = useResource((id, title, description, author, dateCreated, complete, dateCompleted) => ({
        
        url: '/todos/' + id,
        method: 'PUT',
        data: {title: title, description: description, author: author, dateCreated: dateCreated, dateCompleted: dateCompleted, complete}
    }));

    function handleDelete (id) {
        deleteTodo(id);
        dispatch({type:"DELETE_TODO", id})
    }

    function handleToggle (id, title, description, author, dateCreated, complete) {
        console.log("Toggle")
        var d = Date(Date.now());
        console.log(complete)
        if (!complete) {
            dateCompleted = d;
        } else {
            dateCompleted = null;
        }
        complete = !complete
        console.log(complete)
        updateTodo(id, title, description, author, dateCreated, complete, dateCompleted)
        dispatch({type:"TOGGLE_TODO", id, dateCompleted, complete})
    }

    return (
         <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <br />
            <i>Written by: <b>{author}</b></i><br/>
            <i>Date Created: <b>{dateCreated}</b></i><br/>
            <div>
                <label>Completed: </label>
                <input type="checkbox" checked={complete} onClick={() => handleToggle(id, title, description, author, dateCreated, complete)} value={complete}></input>
            </div>
            <i>Date Completed: <b>{dateCompleted}</b></i><br/>
            <button onClick={() => handleDelete(id)}>DELETE</button>
            <hr></hr>
        </div>
        )
}
//<input type="checkbox" onClick={() => dispatch({type: "TOGGLE_TODO", id})} value={complete}></input>
//<button onClick={() => dispatch({type: "DELETE_TODO", id})}>DELETE</button>
//https://www.robinwieruch.de/react-checkbox/