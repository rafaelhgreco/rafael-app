import React from "react";
const range = (start: number, end: number): number[] => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
};
export const getPaginationItemsSemantic: (
    currentPage: number,
    totalPages: number,
    siblingCount: number
) => (number | string)[] = (currentPage, totalPages, siblingCount) => {
    const totalVisibleItems = siblingCount + 5;

    if (totalVisibleItems >= totalPages) {
        return range(1, totalPages + 1);
    }

    const leftSiblingsIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingsIndex = Math.min(currentPage + siblingCount, totalPages);

    const showLeftEllipsis = leftSiblingsIndex > 2;
    const showRightEllipsis = rightSiblingsIndex < totalPages - 2;

    if (!showLeftEllipsis && showRightEllipsis) {
        const leftItemCount = 3 + 2 * siblingCount;
        let leftRange = range(1, leftItemCount + 1);
        return [...leftRange, "...", totalPages];
    } else if (showLeftEllipsis && !showRightEllipsis) {
        const rightItemCount = 3 + 2 * siblingCount;
        const rightRange = range(
            totalPages - rightItemCount + 1,
            totalPages + 1
        );
        return [1, "...", ...rightRange];
    } else {
        const middleRange = range(leftSiblingsIndex, rightSiblingsIndex + 1);
        return [1, "...", ...middleRange, "...", totalPages];
    }
};

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
    const handlePrevious = () => {
        if (currentPage > initialPage) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < pages) {
            onPageChange(currentPage + 1);
        }
    };

    const paginationItems = getPaginationItemsSemantic(
        currentPage,
        pages,
        siblingCount
    );

    return (
        <div
            className={className}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
            <button
                onClick={handlePrevious}
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
            <button onClick={handleNext} disabled={currentPage === pages}>
                Próxima
            </button>
        </div>
    );
};

export { Pagination };
