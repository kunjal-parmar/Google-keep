import React, { useState } from 'react';

import {IoIosAdd} from "react-icons/io";
// import { Box, IconButton } from '@mui/material';
// import { PushPinOutlined } from '@mui/icons-material';
// import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
// import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';


function CreateArea({ submitButton, onAdd}) {
const [isExpanded, setExpanded] = useState(false);
//const [pinnedNotes, setPinnedNotes] =  useState([])
const [ note, setNote] = useState({
        Title: "",
        content: "",
 });
//  function handleClick() {
//     props.onPushPinOutlined(id);
//   }

    function handleChange(e) {
        const{name, value} = e.target
        setNote(preValue => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    
    }

  function handleExpanded(){
        setExpanded(true);

    }

   // eslint-disable-next-line 
   function submitButton(event) {
        onAdd(note);
        setNote({
            Title: "",
            content: "",
          });
        event.preventDefault();
    }
    // const remove=(index)=>{
    //     setNote(
    //         (prev)=>[...prev.slice(0,index), prev.slice(index+1)]
    //     )
    // }

    // const pin = (index)=>{
    //     setPinnedNotes(
    //         (prev)=>[...prev, setNote[index]]

    //     )
    //     remove(index)
       

    // }
   

    return (
        <div>
            <form >
            {/* <button onClick={handleClick}>
            <PushPinOutlinedIcon /> */}
            {/* </button> */}
            {/* <Box  sx={{display: 'flex', flexDirection: 'row', marginLeft: '95%'}}>
                <IconButton>         
      <PushPinOutlined />
      </IconButton>
      </Box>  */}
            
            {isExpanded && (
                <input value={note.Title} type="text" placeholder="Title" name="Title" onChange={handleChange} /> )}
             <p>
                       <textarea 
                        value={note.content}
                        onClick={handleExpanded}
                         name="content" placeholder="Take a note..." onChange={handleChange} rows={isExpanded ? 3 : 1} >
                            
                         </textarea>
                    </p>
                    <button onClick={submitButton}>
                        <IoIosAdd size={35}/> 
                    </button>
                    {/* <Box sx={{display: 'flex', width: '90px', justifyContent: 'space-between', margin: '2.8%'}}>
                        <IconButton sx={{marginLeft: '13%', marginTop: '30%'}}>
                            <PaletteOutlinedIcon />
                        </IconButton>
                        <IconButton sx={{marginLeft: '10%', marginTop: '30%'}}>
                            <ImageOutlinedIcon />
                        </IconButton>
                    </Box> */}

                    {/* <box>


                       </box> */}
                                {/* <box sx={{
                                       width: '100%'
                                }}>   <masnory columns={{xs:1, sm:2, md:4}} spacing={2}>
                                    {
                                        setNote.length!=0
                                        ?
                                        setNote.map((ele, index))
                                        <IconButton classname="pinbutton" onClick={()=>pin(index)}>
                                        <PushPinOutlined />
                                    </IconButton>
}
                                </masnory>

                                        </box>
                    */}
            </form>
            
        </div>
    ); }
    

export default CreateArea;