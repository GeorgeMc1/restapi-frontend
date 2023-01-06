import { useState } from "react";
import {register} from "../utils";
import styled from "styled-components";
export const Form = (props) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const submitHandler = async (e) => {
        e.preventDefault();
        await register(firstName, lastName, email, username, password);
        if (props.cookie) props.getUsers(props.cookie);
    }
    return(
        <FormContainer onSubmit={submitHandler}>
            <FieldContainer>
                <label>First Name:</label>
                <input onChange={event => setFirstName(event.target.value)} required/>
            </FieldContainer>
            <FieldContainer>
                <label>Last Name:</label>
                <input onChange={event => setLastName(event.target.value)}/>
            </FieldContainer>
            <FieldContainer>
                <label>Email:</label>
                <input onChange={event => setEmail(event.target.value)} required/>
            </FieldContainer>
            <FieldContainer>
                <label>Username:</label>
                <input onChange={event => setUsername(event.target.value)} required/>
            </FieldContainer>
            <FieldContainer>
                <label>Password:</label>
                <input type="password" onChange={event => setPassword(event.target.value)} required/>
            </FieldContainer>
            <button type="submit">Submit</button>
        </FormContainer>
    )
}

const FormContainer = styled.form`
    display: flex;
    max-width: 1000px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`
const FieldContainer = styled.div`
    display: flex;
    width: 265px;
    margin: 5px 0;
    label{
        text-align: end;
        margin-right: 5px;
        width: 80px;
    }
`