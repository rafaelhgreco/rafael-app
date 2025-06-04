import React from "react";
import { useUsers } from "../hooks/use_users";
import UserCard from "./user_card";
import defaultTheme from "../styles/themes";
import { BasicButton } from "../components/atoms/button/button";
import { Styled } from "./user_list.styles";
import { ThemeProvider } from "styled-components";

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
            <Styled.ListContainer>
                <Styled.Title>User List</Styled.Title>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </Styled.ListContainer>
            <Styled.ListContainer style={{ gap: "10px" }}>
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
            </Styled.ListContainer>
        </ThemeProvider>
    );
};

export default UserList;
