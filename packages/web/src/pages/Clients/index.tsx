import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL_API_CLIENTS } from "../../utils/constants";
import DisplayUsers from "../../components/DisplayUsers";
import EditingForm from "../../components/EditingForm";

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

  const fetchUsers = async () => {
    axios
    .get(URL_API_CLIENTS)
    .then(res => {
      setUsers(res.data);
    });
  };

  const handleChange = ({target}) => {
    let newValue = {[target.name]: target.value};
    setUserState(userState => ({
      ...userState,
      ...newValue
    }));
  };
    
  const createUser = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 
    await axios.post(URL_API_CLIENTS, userState); 
  };
  
  const deleteUser = async ({target}) => await axios.delete(`${URL_API_CLIENTS}/${target.value}`);
  
  const toogleEditForm = ({target}) => {
    setIdUserEdited(target.value);
    setIsEditing(!isEditing);
  };
    
  const updateUser = async (e: { preventDefault?: any; target: any; }) => {
      e.preventDefault();
      await axios.put(`${URL_API_CLIENTS}/${idUserEdited}`, userState);
      toogleEditForm(e);      
  };
   
  useEffect(() => {
    setIsLoading(true);
    fetchUsers();
    setIsLoading(false);
  }, [createUser, deleteUser, updateUser]);

  const displayUser =  <DisplayUsers createUser={createUser} userState={userState} handleChange={handleChange} isLoading={isLoading} users={users} deleteUser={deleteUser} toogleEditForm={toogleEditForm} />

  const editingForm = <EditingForm updateUser={updateUser} userState={userState} handleChange={handleChange} toogleEditForm={toogleEditForm} />

  return (
    <>
      <h1>CLIENTS</h1>
      {isEditing ? editingForm : displayUser }
    </>
  );
};

