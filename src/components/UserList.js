import React from "react";
import "./UserList.css";

const UserList = ({ users, onUserClick }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Full Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} onClick={() => onUserClick(user.id)}>
            <td>
              <img src={user.image} alt={user.firstName} width="50" />
            </td>
            <td>{`${user.firstName} ${user.lastName}`}</td>
            <td>{user.gender}</td>
            <td>{user.age}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
