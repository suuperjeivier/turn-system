import React from "react";

import { getFirestore, doc, updateDoc, where, collection, getDocs, addDoc, query, orderBy, limit } from 'firebase/firestore';



const Caller = (props) => {


  const db = getFirestore(props.databaseApp);

    
    async function clickHandler(e){

      let turnNumber = 1;
      let turnRef = "";
      //const querySnapshot = await getDocs(collection(db, "turns"));
      const turnsRef = collection(db, "turns");
      const q = query(turnsRef, where("type", "==", "newTurn"),  limit(1));
      console.log(q);
      const querySnapshot = await getDocs(q);
      
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().turnNumber}`);
      turnNumber = (doc.data().turnNumber);
      turnRef = doc

    });
    
    try {
        const docRef = doc(turnsRef, turnRef.id)
      const docRefUpdate = await updateDoc(turnRef, {
        type: "ATTENDED"  
      });
      console.log("Document written with ID: ", docRefUpdate.id, docRefUpdate.type);
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

        <div>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button onClick = {clickHandler} type="submit">Llamar siguiente</button>
        </div>
        
    );
        return newItemBtn;
    
}

export default Caller;