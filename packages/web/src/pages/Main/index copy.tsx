import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import User from "../../components/User";
import usePaginate from "../../hooks/usePaginate";

export default function Home() {
  const [searchParams] = useSearchParams();
  const {users} = usePaginate('https://randomuser.me/api/', searchParams);

  const [filters, setFilters] = useState('');

  const pages = [...Array(users.length).keys()].map(number => number + 1);
  
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
          <User key={user.email} {...user} />
          // style={{
          //   display: "inline-block"
          // }}        
          ))}
      <div className="numbers">
        {pages.map((number, i) => (
          <Link key={i} to={`?page=${number}`}> {number} </Link>
        ))}
      </div>
    </div>
  );
};
