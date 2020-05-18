/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import LoadIphone from "../LoadIphone"

// @material-ui/icons
import { Apps, CloudDownload, SaveAlt } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Button from "../CustomButtons/Button";

import styles from "./headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Tooltip
      id="load-phone"
      title="Click to load new phones"
      placement={window.innerWidth > 959 ? "top" : "left"}
      classes={{ tooltip: classes.tooltip }}
    >
        <LoadIphone />
        </Tooltip>
      </ListItem>
    </List>
  );
}
