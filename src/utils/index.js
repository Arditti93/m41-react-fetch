export const regUser = async (username, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/createUser", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "email" : email,
                "password" : password
            })
        })
        const data = await response.json()
        console.log(data)
        setter(data.username)
    } catch (error) {
        console.log(error)
    }
}

export const readUsers = async () => {
    try {
        const response = await fetch("http://localhost:5001/readUser", {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        const data = await response.json()
        //console.log(data.user)
        const usernames = data.user.map(users => users.username)
        //console.log(usernames)
        return usernames
    } catch (error) {
        console.log(error)
    }
}
//TODO: add delete and update fetch requests

