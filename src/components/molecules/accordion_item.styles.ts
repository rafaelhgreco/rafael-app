import styled from "@emotion/styled";
import { Card } from "../atoms/card";
const AccordionButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 10px;
    width: 100%;
    text-align: left;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:focus {
        outline: none;
    }
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
    padding: 10px;
    display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const Container = styled(Card)`
    padding: 20px;
    margin: 10px 0;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 60%;
`;

export const Styled = {
    AccordionButton,
    AccordionContent,
    Container,
};
