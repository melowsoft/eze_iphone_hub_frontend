import React from 'react'
import {makeStyles} from "@material-ui/core"
import Iphone from "../../assets/img/Iphones/iphone-11.png"
import Button from "../CustomButtons/Button"

import styles from './showcase'

const useStyles = makeStyles(styles)

const ShowCase = () => {
    const classes = useStyles()
    return (
        <div className={classes.phoneCard}>
        <div className={classes.grade}>B1</div>
        <div className={classes.imageContainer}>
        
        <img className={classes.image} src={Iphone} alt="phone" />
        </div>
        <div className={classes.detailArea}>
        <div className={classes.nameSection}>
        <h3 className={classes.productName}>Iphone X</h3>
        <p>Unlocked | 256GB</p>
        </div>
        <div className={classes.priceArea}>
            <p>Unit price</p>
            <h3>$450</h3>
            <p>1500 Available</p>
        </div>
        <div className={classes.buttonContainer}>
       <button className={classes.buy}>
        BUY
       </button>
        </div>

        </div>
        </div>
    )
}

export default ShowCase;