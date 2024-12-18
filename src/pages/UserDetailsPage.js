import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserDetails from "../components/UserDetails";

const UserDetailsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <UserDetails user={user} />
    </div>
  );
};

export default UserDetailsPage;
