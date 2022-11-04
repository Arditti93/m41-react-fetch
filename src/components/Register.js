import React from "react";
import { useState } from "react"
import {regUser} from '../utils'

const Register = ({setter}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        // console.log(username)
        // console.log(email)
        // console.log(password)
        await regUser(username, email, password, setter)
    }

    return (
        <form onSubmit = {submitHandler}>
            <label>Username:
                <input onChange={(event)=> setUsername(event.target.value)} />
            </label>
            <br></br>

            <label>Email:
                <input onChange={(event)=> setEmail(event.target.value)} />
            </label>
            <br></br>

            <label>Password:
                <input onChange={(event)=> setPassword(event.target.value)} />
            </label>
            <br></br>
            <button type="submit">Click here to login</button>
        </form>
    )
}

export default Register
