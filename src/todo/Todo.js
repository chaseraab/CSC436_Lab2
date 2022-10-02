import {useState} from 'react';
export default function Todo ({title, description, author, dateCreated}) {
           
    const [dateCompleted, setDateCompleted] = useState(null);
    const [complete, setCompleted] = useState(false);

    const handleChange = () => {
        setCompleted(!complete);
        if (!complete) {
            setDateCompleted(Date(Date.now()))
        } else {
            setDateCompleted(null)
        }
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
                <input type="checkbox" onClick={handleChange}></input>
            </div>
            <i>Date Completed: <b>{dateCompleted}</b></i><br/>
            <hr></hr>
        </div>
        )
}

//https://www.robinwieruch.de/react-checkbox/
