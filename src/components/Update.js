import { useState } from "react";
import styled from "styled-components";
import { updateUser, readUser } from "../utils";

export const Update = (props) => {
    const [updateUsername, setUpdateUsername] = useState(false);
    const [updateFirstName, setUpdateFirstName] = useState(false);
    const [updateLastName, setUpdateLastName] = useState(false);
    const [updateEmail, setUpdateEmail] = useState(false);
    const [username, setUsername] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();

    const usernameHandler = async () => {
        await updateUser(props.user.username, "username", username);
        const user = await readUser(props.cookie, username);
        props.setUser(user.users[0]);
        setUsername();
        setUpdateUsername(!updateUsername);
    }
    const cancelUsername = () => {
        setUsername();
        setUpdateUsername(!updateUsername);
    }
    const firstNameHandler = async () => {
        await updateUser(props.user.username, "firstname", firstName);
        const user = await readUser(props.cookie, props.user.username);
        props.setUser(user.users[0]);
        setFirstName();
        setUpdateFirstName(!updateFirstName);
    }
    const cancelFirstName = () => {
        setFirstName();
        setUpdateFirstName(!updateFirstName);
    }
    const lastNameHandler = async () => {
        await updateUser(props.user.username, "lastname", lastName);
        const user = await readUser(props.cookie, props.user.username);
        props.setUser(user.users[0]);
        setLastName();
        setUpdateLastName(!updateLastName);
    }
    const cancelLastName = () => {
        setLastName();
        setUpdateLastName(!updateLastName);
    }
    const emailHandler = async () => {
        await updateUser(props.user.username, "email", email);
        const user = await readUser(props.cookie, props.user.username);
        props.setUser(user.users[0]);
        setEmail();
        setUpdateEmail(!updateEmail);
    }
    const cancelEmail = () => {
        setEmail();
        setUpdateEmail(!updateEmail);
    }
    return(
        <UpdateWrapper>
            <h2>Welcome {props.user.username}</h2>
            <FieldWrapper>
                <label>Username:</label>
                {!updateUsername ?
                    <>
                        <p>{props.user.username}</p>
                        <button onClick={() => setUpdateUsername(!updateUsername)}>update</button>
                    </>
                :
                    <>
                        <input placeholder={props.user.username} onChange={(e) => setUsername(e.target.value)}></input>
                        <button onClick={usernameHandler}>save</button>
                        <button onClick={cancelUsername}>cancel</button>
                    </>
                }
            </FieldWrapper>
            <FieldWrapper>
                <label>First Name:</label>
                {!updateFirstName ?
                    <>
                        <p>{props.user.firstname}</p>
                        <button onClick={() => setUpdateFirstName(!updateFirstName)}>update</button>
                    </>
                :
                    <>
                        <input placeholder={props.user.firstname} onChange={(e) => setFirstName(e.target.value)}></input>
                        <button onClick={firstNameHandler}>save</button>
                        <button onClick={cancelFirstName}>cancel</button>
                    </>
                }
            </FieldWrapper>
            <FieldWrapper>
                <label>Last Name:</label>
                {!updateLastName ?
                    <>
                        <p>{props.user.lastname}</p>
                        <button onClick={() => setUpdateLastName(!updateLastName)}>update</button>
                    </>
                :
                    <>
                        <input placeholder={props.user.lastname} onChange={(e) => setLastName(e.target.value)}></input>
                        <button onClick={lastNameHandler}>save</button>
                        <button onClick={cancelLastName}>cancel</button>
                    </>
                }
            </FieldWrapper>
            <FieldWrapper>
                <label>Email:</label>
                {!updateEmail ?
                    <>
                        <p>{props.user.email}</p>
                        <button onClick={() => setUpdateEmail(!updateEmail)}>update</button>
                    </>
                :
                    <>
                        <input placeholder={props.user.email} onChange={(e) => setEmail(e.target.value)}></input>
                        <button onClick={emailHandler}>save</button>
                        <button onClick={cancelEmail}>cancel</button>
                    </>
                }
            </FieldWrapper>
        </UpdateWrapper>
    )
}
const UpdateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;

    p{
        margin: 5px 5px 5px 0;
        min-width: 150px;
    }
    label{
        margin: 5px 5px 5px 0;
        width: 80px;
        text-align: end;
    }
`
const FieldWrapper = styled.div`
    display: flex;
    align-items: center;
`