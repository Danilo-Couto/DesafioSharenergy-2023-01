import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Clients() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [idUserEdited, setIdUserEdited] = useState();

  const [userState, setUserState] = useState({
    nome: undefined,  
    email: undefined,
    telefone: undefined,
    endereco: undefined,
    cpf: undefined
  });

  const URL = 'http://localhost:3333/api/user';

  const fetchUsers = async () => {
    axios
    .get('http://localhost:3333/api/user/')
    .then(res => {
      setUsers(res.data);
    });
  };

  const handleChange = (e) => {
    let newValue = {[e.target.name]: e.target.value};
    setUserState(userState => ({
      ...userState,
      ...newValue
    }));
  };
    
  const createUser = async (e: any) => {
    e.preventDefault(); 
    await axios.post(URL, userState); 
  };
  
  const deleteUser = async (e: any) => await axios.delete(`${URL}/${e.target.value}`);
  
  const toogleEditForm = (e) => {
    setIdUserEdited(e.target.value);
    setIsEditing(!isEditing);
  };
    
  const updateUser = async (e: any) => {
      e.preventDefault();
      await axios.put(`${URL}/${idUserEdited}`, userState);
      toogleEditForm(e);      
  };
   
  useEffect(() => {
    setIsLoading(true);
    fetchUsers();
    setIsLoading(false);
  }, [createUser, deleteUser, updateUser]);

  const displayUser = (
    <>
    <form onSubmit={createUser}>
      <input
        type="text" required placeholder="nome"
        onChange={(e) => handleChange(e)}
        name={'nome'}
        defaultValue={userState.nome} />
      <input type="email" required placeholder="email"
        onChange={(e) => handleChange(e)}
        name={'email'}
        defaultValue={userState.email} />
      <input type="text" required placeholder="telefone"
        onChange={(e) => handleChange(e)}
        name={'telefone'}
        defaultValue={userState.telefone} />
      <input type="number" required placeholder="cpf"
        onChange={(e) => handleChange(e)}
        name={'cpf'}
        defaultValue={userState.cpf} />
      <input type="text" required placeholder="endereco, numero"
        onChange={(e) => handleChange(e)}
        name={'endereco'}
        defaultValue={userState.endereco} />
      <button type="submit">Adicionar Novo Usuário</button>
    </form><div>
        {users && users.map((user, i) => (
          <div key={i} >
            <p>Nome: {user.nome}</p>
            <p>E-Mail: {user.email}</p>
            <p>Telefone: {user.telefone}</p>
            <p>CPF: {user.cpf}</p>
            <p>Endereço: {user.endereco}</p>
            <button className="delete" type="button"
              onClick={deleteUser} value={user._id}>Deletar
            </button>
            <button className="edit" type="button"
              value={user._id}
              onClick={toogleEditForm}>Editar tarefa</button>
            <p>---</p>
          </div>
        ))}
      </div>
    </>
  );

  const editingForm = (
    <div className="">
      <form className="" onSubmit={updateUser}>
        <input
          type="text" required placeholder="nome"
          onChange={(e) => handleChange(e)}
          name={'nome'}
          defaultValue={userState.nome} />
        <input type="email" required placeholder="email"
          onChange={(e) => handleChange(e)}
          name={'email'}
          defaultValue={userState.email} />
        <input type="text" required placeholder="telefone"
          onChange={(e) => handleChange(e)}
          name={'telefone'}
          defaultValue={userState.telefone} />
        <input type="number" required placeholder="cpf"
          onChange={(e) => handleChange(e)}
          name={'cpf'}
          defaultValue={userState.cpf} />
        <input type="text" required placeholder="endereco, numero"
          onChange={(e) => handleChange(e)}
          name={'endereco'}
          defaultValue={userState.endereco} />
        <button type="submit">Salvar</button>
        <button className="cancel" type="button" onClick={toogleEditForm}>Cancelar</button>
      </form>
      </div>
  );

  return (
    <>
      <h1>CLIENTS</h1>
      {isEditing ? editingForm : displayUser }
    </>
  );
};

