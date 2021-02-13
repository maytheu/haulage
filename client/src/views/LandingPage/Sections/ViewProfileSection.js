import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function ViewProfileSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Welcome User</h2>
          <form>
            <GridContainer>
              <GridItem>
                <p className={classes.description}> Name: this is your name </p>
              </GridItem>
              <GridItem>
                <p className={classes.description}> Name: this is your name </p>
              </GridItem>
              <GridItem>
                <p className={classes.description}> Name: this is your name </p>
              </GridItem>
              <GridItem>
                <CustomInput
                  labelText="Invoice Number"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem>
                <CustomInput
                  labelText="Invoice Number"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Link to="/admin_edit">
                  <Button color="primary">Edit Profile</Button>
                </Link>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
