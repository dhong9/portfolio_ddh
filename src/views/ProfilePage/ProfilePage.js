import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Palette from "@material-ui/icons/Palette";
import Code from "@material-ui/icons/Code";
import MultilineChart from "@material-ui/icons/MultilineChart";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/daniel_hong.jpg";

// Blender renders
import rainbowLights from "assets/img/animations/lights_rainbow2.png";

// Coding projects
import meadow from "assets/img/coding/meadow_solve.gif";
import connect4 from "assets/img/coding/connect4Anim.gif";
import sudoku from "assets/img/coding/sudokuAnim.gif";
import game_2048 from "assets/img/coding/2048_game.gif";

// Demos art
import fourAces from "assets/img/desmos/FourAces.PNG";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Daniel Hong"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/doughnutPile.png").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Daniel Hong</h3>
                    <h6>Software Engineer</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-artstation"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-linkedin"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-youtube"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Blender Renders",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/74930223628986221449005616552502014337986549104729562120974034270543381790721">
                              <img
                                alt="..."
                                src={rainbowLights}
                                className={navImageClasses}
                              />
                            </a>
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Coding",
                      tabIcon: Code,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <a href="https://PictureShuffle.danielhong.repl.co">
                              <img
                                src={meadow}
                                alt="Meadow puzzle"
                                className={navImageClasses}
                              />
                            </a>
                            <a href="https://Connect4.danielhong.repl.co">
                              <img
                                src={connect4}
                                alt="Connect four"
                                className={navImageClasses}
                              />
                            </a>
                            <a href="https://Sudoku.danielhong.repl.co">
                              <img
                                src={sudoku}
                                alt="Sudoku puzzle"
                                className={navImageClasses}
                              />
                            </a>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <a href="https://2048.danielhong.repl.co">
                              <img
                                alt="..."
                                src={game_2048}
                                className={navImageClasses}
                              />
                            </a>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Graph Art",
                      tabIcon: MultilineChart,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/6724425914366257969501792895835690298905629932787585675968320093947927986177">
                              <img
                                src={fourAces}
                                alt="Four aces"
                                className={classes.imgFluid}
                              />
                            </a>
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
