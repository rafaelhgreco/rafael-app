import React from "react";
import { useUsers } from "../hooks/use_users";

const UserList: React.FC = () => {
    const { users, isLoading, error } = useUsers();

    if (isLoading) {
        return <p>Loading users...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
