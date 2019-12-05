import React from 'react';
import PropTypes from "prop-types";
import key from "weak-key";

// Check if there exists any data
const Table = ({data}) =>
    !data.length ? (
        // !data.length is true means no data
        <p>Nothing to Show</p>
    ) : (
        // Constitute data table
        <div className={"column"}>
            <h2 className={"subtitle"}>
                <strong> Showing {data.length} mails </strong>
            </h2>
            <table className={"table table-hover"}>
                <thead>
                <tr className={"table-primary"}>{Object.entries(data[0])
                    .map(el =>
                        <th key={key(el)} scope="col">
                            {el[0]}
                        </th>)}
                </tr>
                </thead>

                <tbody>
                {data.map(el => (
                    <tr key={el.id} >
                        {Object.entries(el).map(el =>
                        <td key={key(el)}>
                            {el[1]}
                        </td>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

Table.propTypes = {
    data: PropTypes.array.isRequired
};

export default Table;







