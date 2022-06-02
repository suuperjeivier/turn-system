import React from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://127.0.0.1:8080');


const NewItem = () => {

    client.onopen = () => {
        console.log('WebSocket Client Connected');
      };

    function clickHandler(e){
        console.log(Math.random());
        client.send(JSON.stringify({
            number: 4,
            type: "newTurn"
          }));
    }


    let newItemBtn = (
        
            <button onClick = {clickHandler} type="submit">Nuevo turno</button>
        
    );
        return newItemBtn;
    
}

export default NewItem;