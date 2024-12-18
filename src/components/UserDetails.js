import React from "react";
import "./UserDetails.css";

const UserDetails = ({ user }) => {
  return (
    <div>
      <img src={user.image} alt={user.firstName} />
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
      <p>Email: {user.email}</p>
      <p>Address: {user.address.address}</p>
      <p>Country: {user.address.country}</p>
      <p>Job: {user.company.title}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
};

export default UserDetails;
