import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./UserPage.scss";
import { AuthContext } from "../../App";
import { Navigate } from "react-router-dom";
import UserTable from "./UserTable/UserTable";
import UserForm from "./UserForm/UserForm";
import { UserResponse } from "../../models/User";

const UserPage = (): JSX.Element => {
  const API_URL_CLASSROOM = `${process.env.REACT_APP_API_URL as string}/user`;
  const authInfo = useContext(AuthContext);
  const [users, setUsers] = useState<UserResponse[]>([]);

  useEffect(() => {
    fetchUsers();
  }, [authInfo]);

  const fetchUsers = (): void => {
    if (authInfo?.userToken) {
      fetch(API_URL_CLASSROOM, {
        headers: {
          Authorization: `Bearer ${authInfo.userToken}`,
        },
      })
        .then(async (response) => {
          if (response.status !== 200) {
            alert("Ha ocurrido un error en la petición");
          }
          return await response.json();
        })
        .then((responseParsed) => {
          setUsers(responseParsed.data);
        })
        .catch((error) => {
          console.error(error);
          alert("Ha ocurrido un error en la petición");
        });
    }
  };

  return (
    <div className="user-page page">
      {authInfo?.userInfo ? (
        <>
          <Header></Header>
          <h1>Classroom Page!</h1>

          <h3>Listado de usuarios:</h3>
          <UserTable users={users}></UserTable>

          <h3>Crear usuario:</h3>
          <UserForm fetchUsers={fetchUsers} userToken={authInfo?.userToken}></UserForm>
        </>
      ) : (
        <Navigate to="/login" replace={true}></Navigate>
      )}
    </div>
  );
};

export default UserPage;
