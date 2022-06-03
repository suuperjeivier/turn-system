import React from "react";





const NewItem = (props) => {

    

    function clickHandler(e){
      
      let turnNumber = parseInt(localStorage.getItem('turnNumber')) + 1;
        console.log('next: ', turnNumber);
        props.client.send(JSON.stringify({
            number: turnNumber,
            type: "newTurn"
          }));
          localStorage.setItem('turnNumber', turnNumber);
    }


    let newItemBtn = (
        
            <button onClick = {clickHandler} type="submit">Nuevo turno</button>
        
    );
        return newItemBtn;
    
}

export default NewItem;