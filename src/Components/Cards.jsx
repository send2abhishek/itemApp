import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Typography from "@material-ui/core/Typography";
import userIcon from "../icons/user.png";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: "10px",
    marginTop: "-20px",
  },
}));

const Cards = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{ marginTop: "10px" }}>
      <CardHeader />

      <CardContent>
        <Grid container justify="center">
          <Avatar
            alt="user Image"
            src={
              props.data.avatar === null
                ? userIcon
                : `http://${props.data.avatar}`
            }
            variant="circle"
            className={classes.large}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          />
        </Grid>

        <Typography variant="h5" component="h4" align="center">
          {props.data.title}
        </Typography>

        <Grid container>
          <Grid item xs={3}>
            <MonetizationOnIcon />
          </Grid>
          <Grid item xs={8}>
            <Typography color="textSecondary" align="right" variant="subtitle1">
              {`Rs ${props.data.mrp}`}
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <StarBorderIcon />
          </Grid>
          <Grid item xs={8}>
            <Typography color="textSecondary" align="right" variant="subtitle1">
              {props.data.ratings}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Cards;
