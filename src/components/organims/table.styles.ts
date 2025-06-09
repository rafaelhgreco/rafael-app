import styled from "@emotion/styled";

const TableContainer = styled.div`
    width: 80%;
    margin: 20px auto;
    overflow-x: auto;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
`;

const TableHeader = styled.th`
    background-color: #f2f2f2;
    padding: 8px;
    border: 1px solid #ddd;
    text-align: left;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

const TableCell = styled.td`
    padding: 8px;
    border: 1px solid #ddd;
`;

const HighlightedText = styled.span`
    background-color: yellow;
`;

export const Styled = {
    TableContainer,
    Table,
    TableHeader,
    TableRow,
    TableCell,
    HighlightedText,
};
