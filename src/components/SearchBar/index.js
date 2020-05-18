import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";

import styles from './searchbar'
import Button from '../CustomButtons/Button'
import {ArrowForward} from "@material-ui/icons"

const useStyles = makeStyles(styles);

export const SearchBar = () => {
    const classes = useStyles()
    return(
        <div className={classes.inputContainer}>
       <input className={classes.searchbar} type="text" placeholder="Enter Search Term (e.g iPhone x, 128GB or A1)"/>
       <Button className={classes.searchButton} color="primary">
       Search <ArrowForward />
       </Button>
       </div>

    )
}
