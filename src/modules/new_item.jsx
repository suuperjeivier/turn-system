import React from "react";

import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';



const NewItem = (props) => {

  const db = getFirestore(props.app);

    
    async function clickHandler(e){

      let turnNumber = 1;
      const querySnapshot = await getDocs(collection(db, "turns"));
      
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().turnNumber}`);
      turnNumber = (doc.data().turnNumber)+1;
    });

      try {
        const docRef = await addDoc(collection(db, "turns"), {
          turnNumber: turnNumber,
          type: "NEW",         
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
        console.log('next: ', turnNumber);
        props.client.send(JSON.stringify({
            number: turnNumber,
            type: "newTurn"
          }));
       
    }


    let newItemBtn = (
        
            <button onClick = {clickHandler} type="submit">Nuevo turno</button>
        
    );
        return newItemBtn;
    
}

export default NewItem;