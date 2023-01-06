import { writeCookie } from "../common";
export const register = async (firstName, lastName, email, username, password) => {
    try{
        const response = await fetch("http://localhost:5001/createUser",{
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify({
                "firstname": firstName,
                "lastname": lastName,
                "email": email,
                "username": username,
                "password": password
            })
        })
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log(error);
    }
}

export const readUser = async (token, user) => {
    try{
        const response = await fetch("http://localhost:5001/readUser",{
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            method: "POST",
            body: JSON.stringify({
                "username": user
            })
        })
        const data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}

export const updateUser = async (user, key, value) => {
    try{
        const response = await fetch("http://localhost:5001/updateUser",{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ExZWEwYzQxYzJmMGE5MmE4N2JlZjciLCJpYXQiOjE2NzE2MjI1NjV9.yq8XyoQ5gjhOvYJwhOKKlPalMM8Tid3JFreeLmh9440"
            },
            body: JSON.stringify({
                "username": user,
                "key": key,
                "value": value
            })
        })
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log(error);
    }
}

export const deleteUser = async (username) => {
    try{
        const response = await fetch("http://localhost:5001/deleteUser",{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ExZWEwYzQxYzJmMGE5MmE4N2JlZjciLCJpYXQiOjE2NzE2MjI1NjV9.yq8XyoQ5gjhOvYJwhOKKlPalMM8Tid3JFreeLmh9440"
            },
            body: JSON.stringify({
                "username": username
            })
        })
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log(error);
    }
}

export const loginUser = async (username, password, setter) => {
    try{
        const response = await fetch("http://localhost:5001/loginUser",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        const data = await response.json();
        const user = await readUser(data.token, data.username);
        console.log(user);
        if (user.users.length === 1){
            setter(user.users[0]);
            writeCookie("jwt_token", data.token, 7);
        }
    } catch(error){
        console.log(error);
    }
}

export const authCheck = async (cookieValue) => {
    try{
        const response = await fetch("http://localhost:5001/authCheck",{
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${cookieValue}`
            }
        })
        const data = await response.json();
        // console.log(data);
        return data.username;
    } catch(error){
        console.log(error);
    }
}