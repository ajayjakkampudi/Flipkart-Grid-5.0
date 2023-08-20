import React from "react";
import {
  Button,
  makeStyles,
  Box,
  Typography
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles((theme) => ({
  headerMenu: {
    display: "flex",
    alignItems: "center",
    margin: "0 7% 0 auto",
    "& > *": {
      marginRight: 30,
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  login_btn: {
    color: "#2874f0",
    marginLeft: "7%",
    marginRight: "7%",
    fontWeight: 600,
    textTransform: "capitalize",
    cursor: "pointer",
    borderRadius: 2,
    height: 35,
    padding: "5px 35px",
    border: "1px solid #dbdbdb",
    boxShadow: "none",
  },
  menu_link: {
    display: "flex",
  },
  menu_more: {
    fontSize: "1rem",
    fontWeight: 500,
    TextDecoration: "none",
  },
  menu_cart: {
    marginLeft: "5px",
    fontSize: "1rem",
    fontWeight: 500,
    TextDecoration: "none",
  },
}));

function HeaderMenu() {

  const classes = useStyles();

  
  return (
    <Box className={classes.headerMenu}>
        <h3>Soumya</h3>

      <Link to="/orders">
        <Box className={classes.menu_link}>
          <Typography className={classes.menu_more}>Orders</Typography>
          {/* <ExpandMoreIcon /> */}
        </Box>
      </Link>
      <Link to="/cart">
        <Box className={classes.menu_link}>
          <ShoppingCartIcon />
          <Typography className={classes.menu_cart}>Cart</Typography>
        </Box>
      </Link>


    </Box>
  );
}

export default HeaderMenu;