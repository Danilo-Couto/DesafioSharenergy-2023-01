import React from "react";
import styles from '../styles/users.module.css';

export default function User(user: any) {
  return (
    <div className={styles.div_user}>
      <img src={user.picture.medium} />
      <div>Name: {`${user.name.title} ${user.name.first} ${user.name.last}`}</div>
      <div>E-mail: {user.email}</div>
      <div>Username: {user.login.username}</div>
      <div>Age: {user.dob.age}</div>
      <div>Country: {user.location.country}</div>

    </div>
  );
}
