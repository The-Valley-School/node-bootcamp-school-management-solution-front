import { useContext } from "react";
import Header from "../../components/Header/Header";
import "./UserPage.scss";
import { AuthContext } from "../../App";
import { Navigate } from "react-router-dom";

const UserPage = (): JSX.Element => {
  const authInfo = useContext(AuthContext);

  return (
    <div className="user-page page">
      {authInfo?.userInfo ? (
        <>
          <Header></Header>
          <h1>Users Page!</h1>
        </>
      ) : (
        <Navigate to="/login" replace={true}></Navigate>
      )}
    </div>
  );
};

export default UserPage;
