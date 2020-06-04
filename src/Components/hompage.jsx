import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Cards from "./Cards";
import axios from "../axios-instance";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    axios
      .get("/")
      .then((response) => {
        this.setState({
          items: response.data,
        });
      })
      .catch((err) => {
        console.log("got err ", err);
      });
  }
  render() {
    let mapData =
      this.state.items.length > 0 ? (
        this.state.items.map((data, index) => {
          return (
            <Grid key={index} item xs={4}>
              <Cards data={data} />
            </Grid>
          );
        })
      ) : (
        <p>No items Found</p>
      );
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>{mapData}</Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
