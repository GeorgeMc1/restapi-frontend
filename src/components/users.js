import styled from "styled-components";
import { deleteUser } from "../utils";
export const Users = ({users, cookie, getUsers}) => {
    const deleteHandler = async (username) => {
        await deleteUser(username);
        getUsers(cookie);
    }
    if(!users){
        return <h1>empty</h1>
    }
    return(
        <UsersWrapper>
            <h1>users</h1>
            {users.map((user, i) => {
                return(
                    <UserWrapper key={i}>
                        <div>
                            <p>{user.firstname} {user.lastname}<br/>{user.username}</p>
                            <button onClick={() => deleteHandler(user.username)}>X</button>
                        </div>
                    </UserWrapper>
                )
            })}
        </UsersWrapper>
    )
}
const UsersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;

    h1{
        margin: 10px 0;
    }
`
const UserWrapper = styled.div`
    display: flex;

    div{
        display: flex;
        align-items: center;
    }
    p{
        margin: 5px 2px;
    }
`