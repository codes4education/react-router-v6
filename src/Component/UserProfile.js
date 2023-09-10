import React from "react";
import { useParams } from "react-router-dom";

// Mock Data
const userData = {
  users: [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
  ],
};

export default function UserProfile() {
  const { userId } = useParams();
  console.log(userId);
  const user = userData.users.find((user) => user.id === parseInt(userId));

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <h3>Name: {user.name}</h3>
          <p>ID: {user.id}</p>
        </div>
      ) : (
        <p>User Not Found</p>
      )}
    </div>
  );
}
