import React from 'react';

function EditingForm ({updateUser, userState, handleChange, toogleEditForm}) {
  return (
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
};

export default EditingForm;
