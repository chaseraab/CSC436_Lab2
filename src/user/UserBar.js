//import {useState} from 'react'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'

export default function UserBar({user, setUser}) {
    //const user = ''
    //const [user, setUser] = useState('')
    if (user) { 
        return <Logout user={user} setUser={setUser}/> 
    }
    else {
        return (
            <>
              <Login setUser={setUser}/>
              <Register setUser={setUser}/>
            </>
        )
    }
}