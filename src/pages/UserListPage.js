import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserList from "../components/UserList";

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.error(err));
  }, []);

  const handleUserClick = (userId) => {
    navigate(`/user/${userId}`);
  };

  return (
    <div>
      <h1>User List</h1>
      <UserList users={users} onUserClick={handleUserClick} />
    </div>
  );
};

export default UserListPage;
