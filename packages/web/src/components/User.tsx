import React from "react";

export default function User(user: any) {
  return (
    <div>
      <img src={user.picture.medium} />
      <div>Name: {`${user.name.title} ${user.name.first} ${user.name.last}`}</div>
      <div>E-mail: {user.email}</div>
      <div>Username: {user.login.username}</div>
      <div>Age: {user.dob.age}</div>
      <div>Country: {user.location.country}</div>

    </div>
  );
}
