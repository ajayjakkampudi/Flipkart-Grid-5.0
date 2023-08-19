import React, { useEffect, useState } from "react";
import {
  makeStyles,
  InputBase,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


const useStyles = makeStyles((theme) => ({
  search: {
    position: "absolute",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#fff",
    marginLeft: theme.spacing(3),
    top: 12,
    width: "30vw",
    [theme.breakpoints.down("md")]: {
      width: "45vw",
      marginLeft: "10%",
      top: 10,
    },
  },
  searchIcon: {
    padding: theme.spacing(1),
    height: "100%",
    pointerEvents: "none",
    alignItems: "center",
    justifyContent: "center",
    color: "#2874f0",
  },
  inputRoot: {
    fontSize: 16,
    [theme.breakpoints.down("md")]: {
      width: "45vw",
    },
    width: "30vw",
  },
  inputInput: {
    width: "100%",
    padding: theme.spacing(1),
    paddingLeft: `calc(0.1em + ${theme.spacing(2)}px)`,
  },
  listComponent: {
    width: "30vw",
    height: 300,
    overflowY: "auto",
    background: "#ffff",
    color: "#000",
    [theme.breakpoints.down("md")]: {
      width: "45vw",
    },
  },
  listItem: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#F0F6FF",
    },
    color: "#000",
  },
  listText: {
    margin: "0px 10px",
    color: "#000",
    [theme.breakpoints.down("md")]: {
     fontSize:14,
    },
  },
  productAvatar: {
    width: 75,
    height: 75,
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      width: 50,
      height: 50,
    },
  },
}));
function SearchBar() {
  const classes = useStyles();


  return (
    <div className="searchbar" style={{ width: "43%" }}>
      <div className={classes.search}>
        <div style={{ display: "flex" }}>
          <InputBase
            placeholder="Search for products, brands and more"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;