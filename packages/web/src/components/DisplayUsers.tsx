import React from 'react';

function DisplayUsers ({createUser, userState, handleChange, isLoading, users, deleteUser, toogleEditForm}) {
  return (
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
        {
        isLoading ? <div className="loading">Loading...</div> 
        : users && users.map((user: any, i: number) => (
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
};

export default DisplayUsers;
