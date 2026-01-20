import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        backgroundColor: "#1f7bd8",
        height: 64,
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "center",
          minHeight: "64px !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 4,
          }}
        >
          <Button
            component={Link}
            to="/"
            sx={navBtnStyle}
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/about"
            sx={navBtnStyle}
          >
            About
          </Button>

          <Button
            component={Link}
            to="/contact"
            sx={navBtnStyle}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const navBtnStyle = {
  color: "#fff",
  fontSize: "0.95rem",
  fontWeight: 500,
  textTransform: "none",
  padding: "6px 14px",
  borderRadius: "8px",
  minWidth: "auto",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
};

export default Navbar;
