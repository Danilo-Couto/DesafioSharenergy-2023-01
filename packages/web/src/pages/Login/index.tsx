import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";

export default function Login() {

  const [ishidden, setHidden] = useState(true);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // const localStorage = getLocalStorage('user');
    // if (localStorage) {
    //   navigate('/main');
    // }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

  if (user === 'desafiosharenergy' && password ==='sh@r3n3rgy') {
        setLocalStorage('user', user);
        return navigate('/main')
      }
    }

  return (
    <>
     <form>
        <header>User</header>
        <input
          onChange={ (e) => setUser(e.target.value) }
          className="user"
          type="text"
          placeholder="user"
        />
        <header> Senha </header>
        <input
          onChange={ (e) => setPassword(e.target.value) }
          className="password"
          type={ showPassword ? 'text' : 'password' }
          placeholder="******"
        />
        <button
          onClick={ handleSubmit }
          disabled={ !user }
          type="button"
        >
          Entrar
        </button>
        <button
          type="button"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </button>
        <p
          hidden={ ishidden }
        >
          Mensagem de erro
        </p>
      </form>
    </>
  );
}
