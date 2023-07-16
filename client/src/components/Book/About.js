import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

function About() {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2" gutterBottom>
          This is a CRUD Application
        </Typography>
        <Typography variant="h3" gutterBottom sx={{ fontFamily: "fantasy" }}>
          By MERN STACK
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: "fantasy" }}>
          that is created by Melpomeni and Ameneh and updated by
          <Typography variant="h4" sx={{ fontFamily: "fantasy" }}>
            
            <Link
              href="https://github.com/panos-mantis"
              color= "inherit"
              underline="always"
            >
              Panagiotis Mantis
            </Link> {" "}
            <Link color= "inherit" href="https://github.com/guleremre" variant="inherit">
              Emre Güler
            </Link>
          </Typography>
        </Typography>
      </Box>
    </div>
  );
}

export default About;
