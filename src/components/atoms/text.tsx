import styled from "@emotion/styled";

type TextProps = {
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    textAlign?: string;
    children: React.ReactNode;
};

export const Text = styled.p<TextProps>`
    font-size: 16px;
    font-weight: 400;
    color: black;
    text-align: left;
`;
