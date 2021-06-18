import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import rainbowLights from "assets/img/animations/lights_rainbow2.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionArt() {
  const classes = useStyles();
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Digital Art</h2>
        </div>
        <div id="buttons">
          <div className={classes.title}>
            <h3>
              Animations
              <br />
              <small>Rainbow Variety</small>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/74930223628986221449005616552502014337986549104729562120974034270543381790721">
                <img
                  src={rainbowLights}
                  alt="Rainbow lights"
                  className={classes.imgFluid}
                />
              </a>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
