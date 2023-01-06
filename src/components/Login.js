import { useState } from "react";
import { loginUser } from "../utils";
import styled from "styled-components";

export const Login = ({setter, getUsers, cookie}) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submitHandler = async (e) => {
        e.preventDefault();
        await loginUser(username, password, setter);
        if(cookie) getUsers(cookie);
    }
    return(
        <LoginWrapper onSubmit={submitHandler}>
            <FieldWrapper>
                <label>Username:</label>
                <input onChange={event => setUsername(event.target.value)} required/>
            </FieldWrapper>
            <FieldWrapper>
                <label>Password:</label>
                <input type="password" onChange={event => setPassword(event.target.value)} required/>
            </FieldWrapper>
            <button type="submit">Login</button>
        </LoginWrapper>
    )
}

const LoginWrapper = styled.form`
    display: flex;
    max-width: 1000px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`
const FieldWrapper = styled.div`
    display: flex;
    width: 265px;
    margin: 5px 0;
    label{
        text-align: end;
        margin-right: 5px;
        width: 80px;
    }
`