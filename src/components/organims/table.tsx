import {
    type FC,
    useState,
    useRef,
    useEffect,
    useCallback,
    useMemo,
} from "react";
import { Styled } from "./table.styles";

import Search from "../atoms/search";

// Define a interface para os itens da tabela
interface TableItem {
    id: number;
    name: string;
    description: string;
}

// Dados iniciais da tabela
const initialTableData: TableItem[] = [
    { id: 1, name: "Apple", description: "A fruit" },
    { id: 2, name: "Banana", description: "Another fruit" },
    { id: 3, name: "Orange", description: "Citrus fruit" },
    { id: 4, name: "Grape", description: "Small and juicy" },
    { id: 5, name: "Watermelon", description: "Large and refreshing" },
    { id: 6, name: "Strawberry", description: "Delicious red fruit" },
    { id: 7, name: "Pineapple", description: "Tropical fruit" },
    { id: 8, name: "Mango", description: "Sweet and juicy fruit" },
    { id: 9, name: "Kiwi", description: "Green and tangy fruit" },
    { id: 10, name: "Blueberry", description: "Small and antioxidant-rich" },
    { id: 11, name: "Peach", description: "Soft and fuzzy fruit" },
    { id: 12, name: "Plum", description: "Sweet and tart fruit" },
    { id: 13, name: "Cherry", description: "Small and red fruit" },
    { id: 14, name: "Papaya", description: "Tropical and sweet fruit" },
    { id: 15, name: "Coconut", description: "Hard shell with water inside" },
    { id: 16, name: "Lemon", description: "Sour citrus fruit" },
    { id: 17, name: "Lime", description: "Small and sour citrus fruit" },
    { id: 18, name: "Raspberry", description: "Red and sweet berry" },
    { id: 19, name: "Blackberry", description: "Dark and juicy berry" },
    { id: 20, name: "Cantaloupe", description: "Melon with orange flesh" },
    { id: 21, name: "Honeydew", description: "Melon with green flesh" },
    { id: 22, name: "Fig", description: "Sweet and chewy fruit" },
    { id: 23, name: "Date", description: "Sweet and sticky fruit" },
    { id: 24, name: "Pomegranate", description: "Red fruit with seeds" },
    { id: 25, name: "Tangerine", description: "Small and sweet citrus fruit" },
];

// Define as propriedades do componente DataTable
interface DataTableProps {
    data: TableItem[];
    searchTerm: string;
}

// Componente DataTable
const DataTable: FC<DataTableProps> = ({ data, searchTerm }) => {
    // Ref para armazenar os elementos destacados
    const highlightedRefs = useRef<Map<number, HTMLSpanElement>>(new Map());
    // Estado para controlar o índice do item destacado atual
    const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);

    // Calcula os itens que contêm o termo de pesquisa
    const matchingItems = useMemo(() => {
        if (!searchTerm) return [];

        return data.filter(
            (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
        );
    }, [data, searchTerm]);

    // Reseta o índice quando o termo de pesquisa muda
    useEffect(() => {
        setCurrentHighlightIndex(0);
        highlightedRefs.current.clear();
    }, [searchTerm]);

    // Função para fazer scroll até o item destacado atual
    const scrollToHighlighted = useCallback(() => {
        if (matchingItems.length === 0) return;

        const currentItem = matchingItems[currentHighlightIndex];
        if (!currentItem) return;

        const element = highlightedRefs.current.get(currentItem.id);
        if (element) {
            // Scroll no contêiner scrollable
            const scrollableContainer = document.getElementById(
                "scrollable-container"
            );
            if (scrollableContainer) {
                const containerRect =
                    scrollableContainer.getBoundingClientRect();
                const elementRect = element.getBoundingClientRect();

                // Calcula a posição relativa do elemento dentro do contêiner
                const relativeTop =
                    elementRect.top -
                    containerRect.top +
                    scrollableContainer.scrollTop;

                // Faz o scroll para centralizar o elemento
                scrollableContainer.scrollTo({
                    top: relativeTop - scrollableContainer.clientHeight / 3,
                    behavior: "smooth",
                });
            } else {
                // Fallback para scroll da página
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest",
                });
            }
        }
    }, [matchingItems, currentHighlightIndex]);

    // Efeito para executar o scroll sempre que o índice mudar
    useEffect(() => {
        if (matchingItems.length > 0) {
            // Pequeno delay para garantir que o elemento foi renderizado
            const timer = setTimeout(scrollToHighlighted, 100);
            return () => clearTimeout(timer);
        }
    }, [scrollToHighlighted, matchingItems.length]);

    // Função para destacar o texto
    const highlightText = (
        text: string,
        searchTerm: string,
        itemId: number,
        isCurrentMatch: boolean
    ) => {
        if (!searchTerm) return text;

        const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));

        return (
            <>
                {parts.map((part, index) =>
                    part.toLowerCase() === searchTerm.toLowerCase() ? (
                        <Styled.HighlightedText
                            key={index}
                            ref={(el) => {
                                if (el && isCurrentMatch) {
                                    highlightedRefs.current.set(itemId, el);
                                }
                            }}
                            style={{
                                backgroundColor: isCurrentMatch
                                    ? "#ff6b6b"
                                    : "#ffeb3b",
                                padding: "2px 4px",
                                borderRadius: "3px",
                            }}
                        >
                            {part}
                        </Styled.HighlightedText>
                    ) : (
                        part
                    )
                )}
            </>
        );
    };

    // Handlers para navegação
    const handlePrevious = () => {
        setCurrentHighlightIndex((prev) =>
            prev > 0 ? prev - 1 : matchingItems.length - 1
        );
    };

    const handleNext = () => {
        setCurrentHighlightIndex((prev) => (prev + 1) % matchingItems.length);
    };

    return (
        <Styled.TableContainer>
            {/* Controles de navegação */}
            {matchingItems.length > 0 && (
                <div
                    style={{
                        marginBottom: "10px",
                        padding: "10px",
                        backgroundColor: "#f5f5f5",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <span>
                        Resultado {currentHighlightIndex + 1} de{" "}
                        {matchingItems.length}
                    </span>
                    <button
                        onClick={handlePrevious}
                        disabled={matchingItems.length <= 1}
                        style={{
                            padding: "5px 10px",
                            backgroundColor: "#007bff",
                            color: "white",
                            border: "none",
                            borderRadius: "3px",
                            cursor: "pointer",
                        }}
                    >
                        ← Anterior
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={matchingItems.length <= 1}
                        style={{
                            padding: "5px 10px",
                            backgroundColor: "#007bff",
                            color: "white",
                            border: "none",
                            borderRadius: "3px",
                            cursor: "pointer",
                        }}
                    >
                        Próximo →
                    </button>
                </div>
            )}

            <Styled.Table>
                <thead>
                    <tr>
                        <Styled.TableHeader>ID</Styled.TableHeader>
                        <Styled.TableHeader>Name</Styled.TableHeader>
                        <Styled.TableHeader>Description</Styled.TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        const isMatching = matchingItems.some(
                            (match) => match.id === item.id
                        );
                        const isCurrentMatch =
                            matchingItems[currentHighlightIndex]?.id ===
                            item.id;

                        return (
                            <Styled.TableRow
                                key={item.id}
                                style={{
                                    backgroundColor: isCurrentMatch
                                        ? "#fff3cd"
                                        : "transparent",
                                }}
                            >
                                <Styled.TableCell>{item.id}</Styled.TableCell>
                                <Styled.TableCell>
                                    {highlightText(
                                        item.name,
                                        searchTerm,
                                        item.id,
                                        isCurrentMatch &&
                                            item.name
                                                .toLowerCase()
                                                .includes(
                                                    searchTerm.toLowerCase()
                                                )
                                    )}
                                </Styled.TableCell>
                                <Styled.TableCell>
                                    {highlightText(
                                        item.description,
                                        searchTerm,
                                        item.id,
                                        isCurrentMatch &&
                                            item.description
                                                .toLowerCase()
                                                .includes(
                                                    searchTerm.toLowerCase()
                                                )
                                    )}
                                </Styled.TableCell>
                            </Styled.TableRow>
                        );
                    })}
                </tbody>
            </Styled.Table>
        </Styled.TableContainer>
    );
};

// Define as propriedades do componente TablePage
interface TableProps {
    containerId?: string;
}

// Componente TablePage
const TablePage: FC<TableProps> = ({ containerId }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    return (
        <div>
            <Search onSearch={handleSearch} containerId={containerId} />
            <div
                id="scrollable-container"
                style={{
                    padding: "20px",
                    maxHeight: "80vh",
                    overflowY: "auto",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                }}
            >
                <DataTable data={initialTableData} searchTerm={searchTerm} />
            </div>
        </div>
    );
};

export default TablePage;
