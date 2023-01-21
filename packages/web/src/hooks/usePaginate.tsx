import { useState, useEffect} from "react";
import axios from "axios";

export default function usePaginate(url, query) {
  const [state, setState] = useState({
    users: [],
    limit: 100
  });

  useEffect(() => {
    try {
      axios.get(`${url}/?${query.toString()}&results=${state.limit}&gender=female`)
        .then(res => {
          const users = res.data.results;
          setState({
            ...state,
            users,
          })
        });
    } catch {
      ((err: any)=> console.log(err))
    }
  }, [query.toString()]);

  return state;
};