import { UserResponse } from "../../../models/User";

interface UserProps {
  users: UserResponse[];
}

const UserTable = (props: UserProps): JSX.Element => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Rol</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.email}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.rol}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
