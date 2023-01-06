import './App.css';
import { useState, useEffect } from 'react';
import {readUser, authCheck} from "./utils";
import { Form } from './components/form';
import { Users } from './components/users';
import { Login } from './components/Login';
import { Update } from './components/Update';
import { getCookie } from './common';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const [cookie, setCookie] = useState();
  const getUsers = async (token) => {
    setUsers(await readUser(token));
  }
  useEffect(() => {
    if (cookie) getUsers(cookie);
    let gotCookie = getCookie("jwt_token");
    if (gotCookie !== false){
      loginWithToken(gotCookie);
    }
  }, [cookie])
  const loginWithToken = async (gotCookie) => {
    let user = await authCheck(gotCookie);
    user = await readUser(gotCookie, user);
    setUser(user.users[0]);
    setCookie(gotCookie);
  }
  return (
    <div className="App">
      <h1>Hello There!</h1>
      <Form getUsers={getUsers} cookie={cookie}/>
      <Login setter={setUser} getUsers={getUsers} cookie={cookie} setCookie={setCookie} getCookie={getCookie}/>
      {user ?
        <>
          <Users users={users.users} getUsers={getUsers} cookie={cookie}/>
          <Update user={user} setUser={setUser} cookie={cookie}/>
        </>
        :
        <h2>Please login</h2>}
    </div>
  );
}

export default App;
