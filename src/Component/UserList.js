import React from "react";
import { Link } from "react-router-dom";

// Mock Data
const userData = {
  users: [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
  ],
};

export default function UserList() {
  return (
    <div>
      <h2>UserList</h2>
      <ul>
        {userData.users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
