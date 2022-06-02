import React from "react";


const Table = (props) => {

    let table = (
        <table>
            <th>
                Numero
            </th>
            <tr>
                <td>{props.number}</td>
            </tr>
        </table>
    )

    return table;
}

export default Table;