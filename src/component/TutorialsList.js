import React, { useState, useEffect, useMemo, useRef } from "react";
import TutorialDataService from "../services/TutorialService";
import { useTable } from "react-table";

const TutorialsList = (props) => {
    const [tutorials, setTutorials] = useState([]);
    const tutorialsRef = useRef();

    tutorialsRef.current = tutorials;

    useEffect(() => {
        retrieveTutorials();
    }, []);


    const retrieveTutorials = () => {
        TutorialDataService.getAll()
            .then((response) => {
                setTutorials(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };


    const columns = useMemo(
        () => [
            {
                Header: "Title",
                accessor: "title",
            },
            {
                Header: "Username",
                accessor: "username",
            },
            {
                Header: "Content",
                accessor: "content",
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data: tutorials,
    });

    return (
        <div className="list row">
            <div className="col-md-12 list">
                <table
                    className="table table-striped table-bordered"
                    {...getTableProps()}
                >
                    <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TutorialsList;