import { useState } from "react";
import { Pagination } from "../components/molecules/pagination.component";

const PaginationPage = () => {
    const initialPage = 1;
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [isNavigating, setIsNavigating] = useState(false);

    const handlePageChange = (page: number) => {
        setIsNavigating(true);
        setCurrentPage(page);
    };

    return (
        <div>
            <Pagination
                pages={50}
                currentPage={currentPage}
                initialPage={initialPage}
                onPageChange={handlePageChange}
            />
            {isNavigating && <span>Navegando...</span>}
        </div>
    );
};

export { PaginationPage };
