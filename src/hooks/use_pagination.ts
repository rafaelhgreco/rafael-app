import { useCallback, useMemo } from "react";

interface UsePaginationProps {
    currentPage: number;
    totalPages: number;
    siblingCount?: number;
}

interface PaginationController {
    onPageChange: (page: number) => void;
    handleNext: () => void;
    handlePrevious: () => void;
}

export const usePagination = ({
    currentPage,
    totalPages,
    siblingCount = 1,
    onPageChange,
}: UsePaginationProps & { onPageChange: (page: number) => void }) => {
    const range = (start: number, end: number): number[] => {
        const length = end - start + 1;
        return Array.from({ length }, (_, i) => start + i);
    };

    const getPaginationItemsSemantic = (
        currentPage: number,
        totalPages: number,
        siblingCount: number = 1
    ): (number | string)[] => {
        const totalVisibleItems = siblingCount + 5;
        if (totalVisibleItems >= totalPages) {
            return range(1, totalPages);
        }
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPages
        );
        const showLeftEllipsis = leftSiblingIndex > 2;
        const showRightEllipsis = rightSiblingIndex < totalPages - 1;

        if (!showLeftEllipsis && showRightEllipsis) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = range(1, leftItemCount);
            return [...leftRange, "...", totalPages];
        }
        if (showLeftEllipsis && !showRightEllipsis) {
            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = range(
                totalPages - rightItemCount + 1,
                totalPages
            );
            return [1, "...", ...rightRange];
        }
        if (showLeftEllipsis && showRightEllipsis) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [1, "...", ...middleRange, "...", totalPages];
        }
        return [];
    };

    const paginationItems = useMemo(
        () => getPaginationItemsSemantic(currentPage, totalPages, siblingCount),
        [currentPage, totalPages, siblingCount]
    );

    const handleNext = useCallback(() => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    }, [currentPage, totalPages, onPageChange]);

    const handlePrevious = useCallback(() => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    }, [currentPage, onPageChange]);

    const controller: PaginationController = {
        onPageChange,
        handleNext,
        handlePrevious,
    };

    return {
        paginationItems,
        controller,
    };
};
