import React from "react";
import { usePagination } from "../../hooks/use_pagination";

interface PaginationProps {
    currentPage: number;
    initialPage: number;
    pages: number;
    onPageChange: (page: number) => void;
    className?: string;
    siblingCount?: number;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    initialPage,
    pages,
    onPageChange,
    className,
    siblingCount = 1,
}) => {
    const { paginationItems, controller } = usePagination({
        currentPage,
        totalPages: pages,
        siblingCount,
        onPageChange,
    });

    return (
        <div
            className={className}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
            <button
                onClick={controller.handlePrevious}
                disabled={currentPage === initialPage}
            >
                Anterior
            </button>
            <div style={{ display: "flex", gap: 2 }}>
                {paginationItems.map((item, idx) =>
                    typeof item === "string" ? (
                        <span
                            key={`ellipsis-${idx}`}
                            style={{
                                padding: "4px 8px",
                                margin: "0 2px",
                                color: "#888",
                                userSelect: "none",
                                background: "transparent",
                                border: "none",
                                cursor: "default",
                            }}
                        >
                            {item}
                        </span>
                    ) : (
                        <button
                            key={item}
                            onClick={() => onPageChange(item)}
                            disabled={item === currentPage}
                            style={{
                                fontWeight:
                                    item === currentPage ? "bold" : "normal",
                                background:
                                    item === currentPage ? "#e0e0e0" : "white",
                                border: "1px solid #ccc",
                                margin: "0 2px",
                                padding: "4px 8px",
                                cursor:
                                    item === currentPage
                                        ? "default"
                                        : "pointer",
                            }}
                        >
                            {item}
                        </button>
                    )
                )}
            </div>
            <button
                onClick={controller.handleNext}
                disabled={currentPage === pages}
            >
                Próxima
            </button>
        </div>
    );
};

export { Pagination };
