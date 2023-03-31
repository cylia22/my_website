import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon  from './ce_logo.js';


const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover $power": {
      fill: theme.palette.primary.main,
      transform: "scale(1.2)",
    },
    transition: "all 0.5s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 28.5,
    height: 28.5,
    borderRadius: "50%",
    border: `1px solid ${theme.palette.foreground.default}`,
    boxSizing: "content-box",
    padding: 10,
    margin: "auto",
  },
  power: {
    fill: theme.palette.foreground.default,
    width: 60,
    height: 60,
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.svgHover}>
      <Icon className={classes.power} />
    </div>
  );
};


  



