import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const localStorage = getLocalStorage('user');
    if (localStorage) {
      navigate('/main');
    }
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

  if (user === 'desafiosharenergy' && password ==='sh@r3n3rgy') {
      setLocalStorage('user', user);
      return navigate('/main')
    };
  };

  return (
    <>
     <form>
        <input
          onChange={ ({target}) => setUser(target.value) }
          className="user"
          type="text"
          placeholder="user"
        />
        <header> Senha </header>
        <input
          onChange={ ({target}) => setPassword(target.value) }
          className="password"
          type={ showPassword ? 'text' : 'password' }
          placeholder="******"
        />
        <button
          onClick={ handleSubmit }
          disabled={ !user || !password} 
          type="button"
        >
          Entrar
        </button>
      </form>
    </>
  );
};
