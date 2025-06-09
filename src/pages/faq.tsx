import React from "react";
import Faq from "../components/organims/faq";
import Search from "../components/atoms/search";

export const FAQPage: React.FC = () => {
    return (
        <>
            <Search onSearch={(query) => console.log("Search query:", query)} />
            <Faq />
        </>
    );
};
