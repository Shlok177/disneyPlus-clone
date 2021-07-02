import React, { useEffect } from "react";
import useStyles from "./Styles";
import { Typography, Grid, Button, Card, CardMedia, CardActionArea } from "@material-ui/core";
import Recommend from './Components/Recommend/Recommend'
import New from './Components/New/New'
import Orginals from "./Components/Orginals/Orginals";
import Trending from "./Components/Trending/Trending";

function Movies() {
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <div>
        <Grid container alignItems='center' className={classes.Movies} >
            <Grid item >
                <Recommend />
            </Grid>
            <Grid item>
                <New />
            </Grid>
            <Grid item>
                <Orginals />
            </Grid>
            <Grid item>
                <Trending />
            </Grid>
        </Grid>
    </div>
  );
}

export default Movies;
