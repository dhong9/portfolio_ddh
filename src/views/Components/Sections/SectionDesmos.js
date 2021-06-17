import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import fourAces from "assets/img/desmos/FourAces.PNG";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDesmos() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="images">
          <div className={classes.title}>
            <h2>Graph Art</h2>
          </div>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <h4>Four Aces</h4>
              <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/6724425914366257969501792895835690298905629932787585675968320093947927986177">
                <img
                  src={fourAces}
                  alt="Four aces"
                  className={classes.imgFluid}
                />
              </a>
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
