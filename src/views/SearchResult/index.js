import React, { Component } from 'react'
import ShowCase from '../../components/Showcase'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import {withStyles} from "@material-ui/core"

import styles from "./searchResult"

class SearchResult extends Component {
    render(){
        const { classes } = this.props
        return(
            <>
            <GridContainer className={classes.container}>
            <GridItem sm={3}>
            <ShowCase />
            </GridItem>
            <GridItem sm={3}>
            <ShowCase />
            </GridItem>
            <GridItem sm={3}>
            <ShowCase />
            </GridItem>
            <GridItem sm={3}>
            <ShowCase />
            </GridItem>
            <GridItem sm={3}>
            <ShowCase />
            </GridItem>
            <GridItem sm={3}>
            <ShowCase />
            </GridItem>
            <GridItem sm={3}>
            <ShowCase />
            </GridItem>
            <GridItem sm={3}>
            <ShowCase />
            </GridItem>
            </GridContainer>
            </>
        )
    }
}

export default withStyles(styles)(SearchResult);