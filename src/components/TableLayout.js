/** @format */

import React from "react";
import { Table } from "react-bootstrap";
import Pagination from "./Pagination";

const TableLayout = ({
  thead,
  tbody,
  isPagination = true,
  setCurrentPage,
  currentPage,
  totalDocs,
  docsPerPage,
}) => {
  return (
    <>
      <div className="overFlowCont">
        <Table responsive>
          <thead>
            <tr>
              {thead?.map((i, index) => (
                <th key={`thead${index}`}> {i} </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tbody?.map((rowData, rowIndex) => (
              <tr key={`row${rowIndex}`}>
                {rowData?.map((cellData, cellIndex) => (
                  <td key={`cell${cellIndex}`}>{cellData}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        {isPagination && totalDocs && (
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalDocs={totalDocs}
            docsPerPage={docsPerPage}
          />
        )}
      </div>
    </>
  );
};

export default TableLayout;
