 
import {
  Toolbar,
  AppBar,
  Avatar,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

const Appbar = ({ drawerWidth, showDrawer }) => {
  return (
    <AppBar
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, sm: `${drawerWidth}px` },
      }}
      position="static"
    >
      <Toolbar>
        <IconButton
          onClick={() => {
            showDrawer();
          }}
          sx={{ mr: "9px", display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <Link
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            "&:hover": { fontSize: "16.5px" },
          }}
          color="inherit"
          href="/"
        >
        Online Store
        </Link>

        <Typography mr={2} variant="body1" color="inherit">
        Ahmed Nour
        </Typography>

        <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dh0kvk4g5/image/upload/v1698858985/Ahmed_Nour_encaew.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
