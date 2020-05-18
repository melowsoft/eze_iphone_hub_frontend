import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { withStyles } from "@material-ui/core/styles";
import { classes } from "istanbul-lib-coverage";


const style = {
    min: {
        width: 120,
        height: 30,
        marginBottom: 15,
        background: "white",
        color: "black",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        paddingLeft: 5,
        paddingRight: 5
    },
    max: {
        width: 120,
        height: 30,
        marginBottom: 15,
        background: "white",
        color: "black",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        paddingLeft: 5,
        paddingRight: 5
    },
    viewBox: {
        marginTop: 30
    }
}
 
class Slider extends React.Component {
  state = {
    textValue: null,
    percent: null
  };
 
  onSlide = (render, handle, value, un, percent) => {
    this.setState({
      textValue: value[0].toFixed(2),
      percent: percent[0].toFixed(2)
    });
  };

  
 
  render() {
    const { textValue, percent } = this.state;
    const {classes} = this.props
    return (
      <div>
        <Nouislider
          connect
          start={[500, 4000]}
          behaviour="tap"
          range={{
            min: [0],
            "10%": [500, 500],
            "50%": [4000, 1000],
            max: [10000]
          }}
          onSlide={this.onSlide}
        />
        {textValue && percent && (
          <div>
            Value: {textValue}, {percent} %
          </div>
        )}
        <div className={classes.viewBox}>
        <div className={classes.min}>Min</div>
        <div className={classes.max}>Max</div>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(Slider);