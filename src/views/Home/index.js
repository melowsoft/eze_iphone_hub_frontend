import React, {Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Header from "../../components/Header/Header"
import classNames from "classnames";
import HeaderLinks from "../../components/Header/HeaderLinks"
import GridContainer from "../../components/Grid/GridContainer"
import GridItem from "../../components/Grid/GridItem"
import  Button from "../../components/CustomButtons/Button"
import Parallax from "../../components/Parallax/Parallax"
import {SearchBar} from '../../components/SearchBar'
import LoadIphone from '../../components/LoadIphone'

import styles from './home'
import SearchResult from '../SearchResult';
import Filter from '../../components/Filter';

const dashboardRoutes = [];

class Home extends Component {
    render(){
        const {classes} = this.props
        return (
            <>
            <div className="app">
            <Header
            color="transparent"
            routes={dashboardRoutes}
            brand="IPHONE HUB"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
              height: 400,
              color: "white"
            }}
          />
          <Parallax image={require("../../assets/img/phn4.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Shop Our Latest</h1> <br/>
                  <h1 className={classes.title}>Available Stock Here</h1>
                <SearchBar />
                </div>
              </GridItem>
            </GridContainer>
          </div>
    
        </Parallax>
        <div className={classes.raiseSection}>
        <GridContainer>
        <GridItem md={3} lg={2}>
            <Filter />
        </GridItem>
        <GridItem md={9} lg={10}>
        <SearchResult />
        </GridItem>
        </GridContainer>
        </div>
        </div>
            </>
        )
    }
}

export default withStyles(styles)(Home);