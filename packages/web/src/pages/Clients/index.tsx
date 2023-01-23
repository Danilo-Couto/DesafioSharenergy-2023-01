import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Clients() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const [userState, setUserState] = useState({
    nome: undefined,  
    email: undefined,
    telefone: undefined,
    endereco: undefined,
    cpf: undefined
  });

  const URL = 'http://localhost:3333/api/user/';

  const fetchUsers = async () => {
    axios
    .get('http://localhost:3333/api/user/')
    .then(res => {
      setUsers(res.data);
    });
  }

  const handleChange = (e) => {
    let newValue = {[e.target.name]: e.target.value}
    setUserState(userState => ({
        ...userState,
        ...newValue
      }));
    };
    
  const createTask = async (event: any) => {
    event.preventDefault(); 
    try {
      await axios.post(URL, userState); 
    } catch (error) {
    console.log(error)
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchUsers();
    setIsLoading(false);
  }, [createTask]);

  const deleteAll = async () => await axios.delete(URL);

  return (
    <>
      <h1>CLIENTS</h1>
      <form 
        onSubmit={createTask}
        >
          <input 
            type="text" required placeholder="nome" 
            onChange={(e) => handleChange(e)} 
            name={'nome'}
            defaultValue={userState.nome}
          /> 
          <input type="email" required placeholder="email" 
            onChange={(e) => handleChange(e)} 
            name={'email'}
            defaultValue={userState.email}
          />
          <input type="text" required placeholder="telefone"
            onChange={(e) => handleChange(e)} 
            name={'telefone'}
            defaultValue={userState.telefone}
          />
          <input type="number" required placeholder="cpf"
            onChange={(e) => handleChange(e)} 
            name={'cpf'}
            defaultValue={userState.cpf}
          />
          <input type="text" required placeholder="endereco, numero"
            onChange={(e) => handleChange(e)} 
            name={'endereco'}
            defaultValue={userState.endereco}
          />
        <button type="submit">Adicionar</button>
        <button className="delete" type="button" 
        // onClick={deleteAll}
        >Excluir Tudo
        </button>
    </form>  
      <div>
        {users && users.map((user, i) =>(
          <>
          <p>{user.nome}</p>
          <p>{user.email}</p>
          <p>{user.telefone}</p>
          <p>{user.cpf}</p>
          <p>{user.endereco}</p>
          <button 
            // onClick={delete}
          > Delete
          </button>
          <button 
            // onClick={update}
          > Atualizar
          </button>
          <p>---</p>
          </>
        ))}
      </div>
    </>
  );
};

