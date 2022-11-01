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

    } catch (error) {
        console.log(error)
    }
}