import React from 'react';
import "./styles.css";
import Header from "./components/header";
import CreaterArea from "./components/CreateArea";
import Note from "./components/Note";
import Count from "./components/Count";







function App(props) {
  const[notes, SetNotes] = React.useState ([])
  function addNote(newNote) {
    SetNotes(prevValue => {
      return [...prevValue, newNote]
    })

  }
  function deleteNotes(id) {
    SetNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id) ]
    })
  }
  

  

  return(
    <div>
      <Header />
      
      <Count count={notes.length === 0? "Empty": 
      `Showing ${notes.length} Notes in Database`} />
      <CreaterArea onAdd={addNote} />
      {notes.map((note, index)=> (
        <Note 
        key={index} 
        id={index} 
        Title={note.Title} 
        content={note.content} 
        onDelete={deleteNotes}
        />
    
      ))}
     
      
      
    
       </div>
  );

}

export default App;

