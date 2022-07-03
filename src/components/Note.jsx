import React from 'react';
import {MdDelete} from "react-icons/md";


// import { Box, IconButton } from '@mui/material';
// import { PushPinOutlined } from '@mui/icons-material';
// import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
// import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';



function note({ Title, content, onDelete, id }) {
    return (
        <div className="note">
            <h1>{Title}</h1>
            <p>{content}
            </p>
            <button onClick={() => onDelete(id)}>
                <MdDelete size={25} />
                </button>

               
                
                



 {/* <Box sx={{display: 'flex', width: '90px', justifyContent: 'space-between', margin: '1.8%'}}>
                        {/* <IconButton sx={{marginright: '80%', marginbottom: '85%'}}>
                            <PaletteOutlinedIcon />
                        </IconButton>
                        <IconButton sx={{marginright: '80%', marginbottom: '85%'}}>
                            <ImageOutlinedIcon />
                        </IconButton> */}
                        {/* <IconButton sx={{marginright: '80%', marginbottom: '8%'}}>         
      <PushPinOutlined />
      </IconButton> */}
                    {/* </Box> */} 

                   
        </div>
    ); 

}


export default note;
