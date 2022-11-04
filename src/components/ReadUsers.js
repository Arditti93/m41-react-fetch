import React from 'react'
import {useState, useEffect} from 'react'
import { readUsers } from '../utils'

const ReadUsers = () => {
    //stores our usernames array as state
    const [usernames, setUsernames] = useState()

    useEffect(() =>{
        loadUsers()
    }, [])

    const loadUsers = async () => {
        let users = await readUsers()
        console.log(users)
        setUsernames(users)
    }

    return (
        <div className='container'>
            {usernames?.length > 0 
            //if usernames array exists AND the length is greater than zero
                ?(
                    <div className='usernames'>
                        {/* //loop through the array using .map method and display a h3 of each 
                        username */}
                        {usernames.map((user) =>(
                            <h3>{user}</h3>
                        ))}
                    </div>
                // else usernames array doesn't exists AND is less than zero
                ) : (
                    <div className='empty'>
                        {/* //display no users found */}
                        <h3>No users found</h3>
                    </div>
                )
            }
        </div>
    )
}

export default ReadUsers
