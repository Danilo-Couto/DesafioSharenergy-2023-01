import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Pagination from "../../components/Pagination";
import Users from "../../components/Users";
import { URL_API_USERS, USERS_PER_PAGE } from "../../utils/constants";
import styles from '../../styles/users.module.css';

export default function Main() {
  const [users, setUsers] = useState([]);
  const [usersBase, setUsersBase] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState('');

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(URL_API_USERS)
      .then(res => {
        const result = res.data.results;
        setUsers(result);
        setUsersBase(result);
        setTotalPages(Math.ceil(result.length / USERS_PER_PAGE));
        setIsLoading(false);
      });
  }, []);

  const handleClick = (number: number) => setPage(number);

  return (
    <div>
      <h1>Users</h1>
      {isLoading ? <div className="loading">Loading...</div>
      : (
        <>
          <input
            value = {filters}
            onChange={ (e) => setFilters(e.target.value) }
          >
          </input>
          <Users users={users} page={page} filters={filters} usersBase={usersBase} />
          <Pagination
            totalPages={totalPages}
            handleClick={handleClick}
          />
        </>
      )}
    </div>
  );
};
