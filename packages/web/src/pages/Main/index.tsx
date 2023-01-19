import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Main() {
  const [users, setUsers] = useState('');
  const [filters, setFilters] = useState('')

  useEffect(() => {
    try {
      axios.get("https://randomuser.me/api/?results=10")
        .then(res => setUsers(res.data.results));
    } catch {
      ((err: any)=> console.log(err))
    }
  }, []);

  console.log(users)

  return (
    <div> 
      <input
        value = {filters}
        onChange={ (e) => setFilters(e.target.value) }
      >
      </input>
      <h1>Users</h1>
      {users &&
          users
            .filter(user => 
              user.email.includes(filters) ||
              user.login.username.includes(filters) ||
              user.name.first.includes(filters) ||
              user.name.last.includes(filters))
            .map(user => (
              <div
                key={user.email}
                // style={{
                //   display: "inline-block"
                // }}
              >
                <img src={user.picture.medium} />
                <div>Name: {`${user.name.title} ${user.name.first} ${user.name.last}`}</div>
                <div>E-mail: {user.email}</div>
                <div>Username: {user.login.username}</div>
                <div>Age: {user.dob.age}</div>
              </div>
            ))}
    </div>
  );
}
