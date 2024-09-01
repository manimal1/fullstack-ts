import { useQuery } from "@apollo/client";
import React from "react";
import { GET_USERS } from "../../queries/users";

const Users: React.FC = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {data.users.map((user: { id: number; name: string; email: string }) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
