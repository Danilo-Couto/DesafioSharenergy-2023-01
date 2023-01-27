import React from 'react';
import { USERS_PER_PAGE } from '../utils/constants';
import User from './User';
import styles from '../styles/users.module.css';

const Users = ({ users, page, filters, usersBase }) => {
  const startIndex = (page - 1) * USERS_PER_PAGE;
  const displayedUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);
  
  return (
    <div className={styles.div_users}>
      {
        filters ? (
          usersBase.filter((user: any) => 
            user.email.includes(filters) ||
            user.login.username.includes(filters) ||
            user.name.first.includes(filters) ||
            user.name.last.includes(filters) ||
            user.location.country.includes(filters)
          ).map((user: any) => (
            <User key={user.login.uuid} {...user} />
          ))
        ) : (
        displayedUsers
        .map((user: any) => (
          <User key={user.login.uuid} {...user} />
        )))
      }
    </div>
  );
};

export default Users;
