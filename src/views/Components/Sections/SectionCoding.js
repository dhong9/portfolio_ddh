import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import meadow from "assets/img/coding/meadow_solve.gif";
import connect4 from "assets/img/coding/connect4Anim.gif";
import sudoku from "assets/img/coding/sudokuAnim.gif";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCoding() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="images">
          <div className={classes.title}>
            <h2>Coding</h2>
          </div>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <h4>Picture Shuffle</h4>
              <a href="https://PictureShuffle.danielhong.repl.co">
                <img
                  src={meadow}
                  alt="Meadow puzzle"
                  className={classes.imgFluid}
                />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h4>Connect Four</h4>
              <a href="https://Connect4.danielhong.repl.co">
                <img
                  src={connect4}
                  alt="Connect four"
                  className={classes.imgFluid}
                />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h4>Sudoku</h4>
              <a href="https://Sudoku.danielhong.repl.co">
                <img
                  src={sudoku}
                  alt="Sudoku puzzle"
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
