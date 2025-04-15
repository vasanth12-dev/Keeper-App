import React, { useState } from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';

function CreateArea(props){

    const [note,setNote] = useState({
        title : "",
        content : ""
    })

    function handleChange(event){
        const {name,value} = event.target;
        setNote(prevNote => {
            return{
                ...prevNote,
                [name] : value
            }
        })
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }
    


    return(
        <div>
            <form className="create-note">
                <input name="title" value ={note.title} placeholder="Title" onChange={handleChange}/>
                <textarea name="content" value={note.content} placeholder="Take a note..." rows="3" onChange={handleChange}/>
                <button onClick={submitNote}>
                    <AddTaskIcon />
                </button>
            </form>
        </div>
    )
}

export default CreateArea;