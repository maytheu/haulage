/*eslint-disable*/
import React, { useEffect, useState } from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { PermContactCalendar, FindInPage } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

import { useDispatch, useSelector } from "react-redux";
import { authAdmin } from "store/auth";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {

  const  admin  = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(admin)

  const classes = useStyles();

 useEffect(() => {
   setIsAdmin(admin)
 },[admin])

  if (isAdmin.auth.success) {
    return (
      <div>
        <ListItem className={classes.listItem}>
          <Link to="/contact">
            <Button color="transparent" className={classes.navLink}>
              <PermContactCalendar className={classes.icons} /> contact
            </Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link to="/track_invoice">
            <Button color="transparent" className={classes.navLink}>
              <FindInPage className={classes.icons} /> Track invoice
            </Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link to="/admin_profile">
            <Button color="transparent" className={classes.navLink}>
              <FindInPage className={classes.icons} /> View Profile
            </Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link to="/admin_add_invoice">
            <Button color="transparent" className={classes.navLink}>
              <FindInPage className={classes.icons} /> Add invoice
            </Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link to="/admin_add_carousel">
            <Button color="transparent" className={classes.navLink}>
              <FindInPage className={classes.icons} /> add carousel
            </Button>
          </Link>
        </ListItem>
      </div>
    );
  }

  return (
    <List className={classes.list}>
      <div>
        <ListItem className={classes.listItem}>
          <Link to="/contact">
            <Button color="transparent" className={classes.navLink}>
              <PermContactCalendar className={classes.icons} /> contact
            </Button>
          </Link>
        </ListItem>

        <ListItem className={classes.listItem}>
          <Link to="/track_invoice">
            <Button color="transparent" className={classes.navLink}>
              <FindInPage className={classes.icons} /> track your invoice
            </Button>
          </Link>
        </ListItem>
      </div>
    </List>
  );
}
