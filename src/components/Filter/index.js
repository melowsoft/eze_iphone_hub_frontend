import React, {Component} from 'react';
import {withStyles} from "@material-ui/core"
import styles from './filter'
import Button from "../CustomButtons/Button";
import Slider from "../Slider"

class Filter extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.main}>
            <div className={classes.categories}>
                <h3 className={classes.cat}>Categories</h3>
                <div className={classes.catItem}>All</div>
                <div className={classes.catItem}>iphone</div>
                <div className={classes.catItem}>Samsung</div>
                <div className={classes.catItem}>ipad</div>
                <div className={classes.catItem}>MacBook</div>
                <div className={classes.catItem}>AirPods</div>
            </div>
            <div className={classes.priceFilter}>
               <h3 className={classes.price}>Price Filter</h3>
               <Slider />
            </div>
            <div className={classes.storage}>
            <div className={classes.storageTitle}>
            Storage
            </div>
            <input type="radio" id="32GB" name="storage" value="32GB" />
                <label for="male">32GB</label><br></br>
            <input type="radio" id="64GB" name="storage" value="64GB" />
                <label for="male">64GB</label><br></br>
            <input type="radio" id="256GB" name="storage" value="256GB" />
                <label for="male">256GB</label><br></br>
            </div>
            </div>
        )
    }
}

export default withStyles(styles)(Filter);