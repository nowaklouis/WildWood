import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import DrawerHome from "./DrawerHome";
import Link from "next/link";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "secondary.main", borderRadius: "5px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src="/wild.png"
            sx={{ width: "5rem", height: "auto", marginRight: "2rem" }}
          ></Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "none" },
              justifyContent: "end",
            }}
          >
            <DrawerHome />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "end",
            }}
          >
            <Button
              sx={{
                my: 2,
                color: "secondary",
                display: "block",
              }}
            >
              <Link href="/">Acceuil</Link>
            </Button>
            <Button
              sx={{
                my: 2,
                color: "secondary",
                display: "block",
              }}
            >
              <Link href="/info">Nos Infos</Link>
            </Button>
            <Button
              sx={{
                my: 2,
                color: "secondary",
                display: "block",
              }}
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
