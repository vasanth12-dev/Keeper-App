import Header from "./components/Header"
import Footer from "./components/Footer";
import Note from "./components/Note";
// import notes from "../src/notes"
import CreateArea from "./components/CreateArea";
import { useState } from "react";


function App() {
  const [notes,setNotes]  = useState([])

  function deleteNote(id){
    setNotes((preNotes)=>{
      return preNotes.filter((noteItem,index)=>{
        return index!=id;
      })
    })
  }
  function addNote(newNote){
    setNotes(prevNote =>{
      return [...prevNote,newNote]
    })
  }
  return (
   <div>
    <Header />
    <CreateArea onAdd={addNote}/>
    {notes.map((noteItem,index)=>{
      return <Note 
      id = {index}
      key = {index}
      title = {noteItem.title} 
      content = {noteItem.content} 
      onDelete={deleteNote}
      />
    })}
    <Footer />
   </div>
  )
}

export default App
