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
                var sdsad =[ {
                    "title": "ASdasd",
                    "username": "ajshbdjashd",
                    "content": "Asdasd"
                }]

                    // '<tr' +
                    // '<td>sdadad</td>' +
                    // '</tr>'
                console.log(response.data);

                setTutorials(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };


    const openTutorial = (rowIndex) => {
        const id = tutorialsRef.current[rowIndex].id;

        props.history.push("/tutorials/" + id);
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
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title"
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

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