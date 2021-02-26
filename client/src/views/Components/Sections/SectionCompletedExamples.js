import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Our Goal</h2>
            <h4>
              We offer freight services ranging from an envelope to the largest
              of all goods, delivery at the speed of light. We bear the risk and
              take care of the huzzle on your behalf.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
