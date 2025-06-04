import React from "react";
import type { User } from "../domain/user";
import { Card } from "./atoms/card";
import styled from "styled-components";

const Info = styled.p`
    font-size: var(--font-size-base);
    margin-bottom: 10px;
`;

interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <Card title={user.name}>
            <Info>Email: {user.email}</Info>
            <Info>ID: {user.id}</Info>
        </Card>
    );
};

export default UserCard;
