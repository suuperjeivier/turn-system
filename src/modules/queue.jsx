import React, { useState } from 'react';


const Table = (props) => {
    const [tableRows, setTableRows] = useState([{number: 0, desk: 0}]);
   
    props.client.onmessage = function(e) {
        if (typeof e.data === 'string') {
            console.log("Received: '" + e.data + "'");
            let dataReceived = JSON.parse(e.data);
            let next = {number: dataReceived.number, desk: Math.random()};
            setTableRows(tableRows.concat(next));
            
        }
    };

    let table = (
        <table>
            <caption>TURNOS SIGUIENTES</caption>
            <thead>
                <tr>
                    <th>
                        Numero
                    </th>
                    <th>
                        Caja
                    </th>
                </tr>
            </thead>            
            <tbody>
                {tableRows.map((r) => (
                      <tr>
                          <td>{r.number}</td>
                          <td>{r.desk}</td>
                      </tr>
                    ))}
            </tbody>           
        </table>
    )

    return table;
}

export default Table;