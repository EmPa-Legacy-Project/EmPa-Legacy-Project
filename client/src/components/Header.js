import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooks";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const isOnRegisterScreen = true;
const isOnLoginScreen = true;
function Header() {
  const [value, setValue] = useState();
  const [cookies, setCookies] = useCookies(["access-token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access-token", "");
    window.localStorage.removeItem("userID");
    navigate("/");
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <LibraryBooksOutlinedIcon />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="about" label="About Us" />
            {!cookies["access-token"] ? (
              <>
                {isOnLoginScreen && (
                  <Tab LinkComponent={NavLink} to="register" label="Register" />
                )}
                {isOnRegisterScreen && (
                  <Tab LinkComponent={NavLink} to="login" label="Log in" />
                )}
              </>
            ) : (
              <>
                <Tab LinkComponent={NavLink} to="add" label="Add product" />
                <Tab LinkComponent={NavLink} to="books" label="Books" />
                <Button onClick={logout}>Logout</Button>
              </>
            )}
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
