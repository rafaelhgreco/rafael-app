import React from "react";
import { useUsers } from "../hooks/use_users";
import UserCard from "./user_card";
import styled, { ThemeProvider } from "styled-components";
import defaultTheme from "../styles/themes";
import { BasicButton } from "../components/atoms/button/button";

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const UserList: React.FC = () => {
    const { users, isLoading, error } = useUsers();

    if (isLoading) {
        return <p>Loading users...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <ListContainer>
                <h3>User List</h3>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </ListContainer>
            <ListContainer style={{ gap: "10px" }}>
                <BasicButton
                    label="Button Primary"
                    onClick={() => alert("Add User button clicked!")}
                    variant="primary"
                    size="large"
                />
                <BasicButton
                    label="Button Outline"
                    onClick={() => alert("Reset List button clicked!")}
                    variant="outline"
                    size="large"
                />
                <BasicButton
                    label="Button Secondary"
                    onClick={() => alert("Secondary Action button clicked!")}
                    variant="secondary"
                    size="large"
                />
            </ListContainer>
        </ThemeProvider>
    );
};

export default UserList;
