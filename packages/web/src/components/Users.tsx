import React from 'react';
import { USERS_PER_PAGE } from '../utils/constants';
import User from './User';

const Users = ({ users, page, filters, usersBase }) => {
  const startIndex = (page - 1) * USERS_PER_PAGE;
  const displayedUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);
  
  return (
    <>
      {
        filters ? (
          usersBase.filter(user => 
            user.email.includes(filters) ||
            user.login.username.includes(filters) ||
            user.name.first.includes(filters) ||
            user.name.last.includes(filters) ||
            user.location.country.includes(filters)
          ).map(user => (
            <User key={user.login.uuid} {...user} />
          ))
        ) : (
        displayedUsers
        .map(user => (
          <User key={user.login.uuid} {...user} />
        )))
      }
    </>
  );
};

export default Users;
