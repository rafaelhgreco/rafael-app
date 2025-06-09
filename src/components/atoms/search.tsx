import { type FC, type KeyboardEvent, useRef, useEffect } from "react";
import { Styled } from "./search.styles";
import { BasicButton } from "./button/button";

interface SearchProps {
    onSearch: (searchTerm: string) => void;
    containerId?: string;
}

const Search: FC<SearchProps> = ({ onSearch, containerId }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputRef.current) {
            onSearch(inputRef.current.value);
        }
    };

    const handleClick = () => {
        if (inputRef.current) {
            onSearch(inputRef.current.value);
        }
    };

    useEffect(() => {
        const handleContainerSearch = (event: Event) => {
            if (inputRef.current && event instanceof CustomEvent) {
                inputRef.current.value = event.detail;
                onSearch(event.detail);
            }
        };

        const container = containerId
            ? document.getElementById(containerId)
            : null;

        if (container) {
            container.addEventListener(
                "search",
                handleContainerSearch as EventListener
            );
        }

        return () => {
            if (container) {
                container.removeEventListener(
                    "search",
                    handleContainerSearch as EventListener
                );
            }
        };
    }, [onSearch, containerId]);

    return (
        <Styled.Container>
            <Styled.Input
                type="text"
                ref={inputRef}
                placeholder="Digite o termo para buscar..."
                onKeyDown={handleKeyDown}
            />
            <BasicButton label="Buscar" variant="primary" onClick={handleClick}>
                Buscar
            </BasicButton>
        </Styled.Container>
    );
};

export default Search;
