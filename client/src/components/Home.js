import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Books from "./Book/Books";

function Home() {
  const [showBtn, setShowBtn] = useState(true)
  const handleClick = ()=>{
    const token = localStorage.getItem("token")
      setShowBtn(!showBtn)
      console.log(token)
   
  }

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        {/* <Typography sx={{fontFamily:"fantasy"}} variant="h2" gutterBottom>
          This is a CRUD Application
        </Typography> */}
       
        {showBtn?(<Button variant='contained' sx={{marginTop:15,background:'orangered'}} onClick={handleClick}>
        <Typography variant="h3"  >
          View All Books
        </Typography>

        </Button>):(<Books/>)}
      </Box>
    </div>
  );
}

export default Home;
