import React, { useState } from "react";
import { Styled } from "./accordion_item.styles";
import { Text } from "../atoms/text";

type AccordionItemProps = {
    question: string;
    answer: string;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
    question,
    answer,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Styled.Container>
            <Styled.AccordionButton onClick={toggleAccordion}>
                <Text fontWeight="bold">{question}</Text>
            </Styled.AccordionButton>
            <Styled.AccordionContent isOpen={isOpen}>
                <Text>{answer}</Text>
            </Styled.AccordionContent>
        </Styled.Container>
    );
};
