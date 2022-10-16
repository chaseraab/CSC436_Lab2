import {useState} from 'react';
import {v4 as uuid} from "uuid";
export default function CreateTodo ({user, todos, dispatch}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    var d = Date(Date.now());

    return (
         <form onSubmit={e => {e.preventDefault(); 
                                dispatch({type: "CREATE_TODO", id: uuid(), title, description, author:user, dateCreated: d, complete: false})
                                }}>
            <div>Author: <b>{user}</b></div>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" name="create-title" id="create-title" value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <textarea value={description} onChange={(event) => setDescription(event.target.value)}/>
            <br></br>
            <input type="submit" value="Create" disabled={title.length === 0}/>
        </form>
    )
}
