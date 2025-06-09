import React from "react";
import { AccordionItem } from "../molecules/accordion_item";

type AccordionProps = {
    items: { question: string; answer: string }[];
};

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
    return (
        <div>
            {items.map(
                (
                    accordionItem,
                    accordionIndex // nomes unicos para evitar conflitos
                ) => (
                    <AccordionItem
                        key={accordionIndex}
                        question={accordionItem.question}
                        answer={accordionItem.answer}
                    />
                )
            )}
        </div>
    );
};
