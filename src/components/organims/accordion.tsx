import React from "react";
import { AccordionItem } from "../molecules/accordion_item";

type AccordionProps = {
    items: { question: string; answer: string }[];
};

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                />
            ))}
        </div>
    );
};
