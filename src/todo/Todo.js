export default function Todo ({title, description, author, dateCreated, dispatch, id, complete, dateCompleted}) {

  
    return (
         <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <br />
            <i>Written by: <b>{author}</b></i><br/>
            <i>Date Created: <b>{dateCreated}</b></i><br/>
            <div>
                <label>Completed: </label>
                <input type="checkbox" onClick={() => dispatch({type: "TOGGLE_TODO", id})} value={complete}></input>
            </div>
            <i>Date Completed: <b>{dateCompleted}</b></i><br/>
            <button onClick={() => dispatch({type: "DELETE_TODO", id})}>DELETE</button>
            <hr></hr>
        </div>
        )
}

//https://www.robinwieruch.de/react-checkbox/
