import styled from "@emotion/styled";
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

export const Styled = {
    ListContainer,
    Title,
};
