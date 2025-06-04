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
    padding: var(--padding-xs);
`;

const Title = styled.h3`
    color: var(--color-text);
    margin-bottom: 20px;
    font-size: var(--font-size-title);
    text-align: center;
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
                <Title>User List</Title>
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
                    size="small"
                />
                <BasicButton
                    label="Button Secondary"
                    onClick={() => alert("Secondary Action button clicked!")}
                    variant="secondary"
                    size="medium"
                />
            </ListContainer>
        </ThemeProvider>
    );
};

export default UserList;
