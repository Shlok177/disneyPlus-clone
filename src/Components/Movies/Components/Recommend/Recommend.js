import React, { useEffect } from "react";
import useStyles from "./Styles.js";
import {
  Typography,
  Grid,
  Button,
  Container,
  Card,
  CardMedia,
  CardActionArea,
  CssBaseline,
} from "@material-ui/core";

function Recommend() {
  const classes = useStyles();
  return (
    <div className={classes.Main}>
      <CssBaseline />
      <Typography variant="h4" className={classes.text}>
        Recommended for You
      </Typography>
      <Container maxWidth='xl' className={classes.Container} >
        <Grid
          container
          spacing={2}
          justify="center"
          className={classes.GridContainer}
        >
          {/* Img 1 */}
          <Grid item>
            <Card className={classes.Card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"
                />
              </CardActionArea>
            </Card>
          </Grid>
          {/* Img2 */}
          <Grid item>
            <Card className={classes.Card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/706C68FF1CEA5A9C2AE0608892C2DF79E4AC1F0DDB4BFF7FE6DAFC36DAFC0286/scale?width=400&aspectRatio=1.78&format=jpeg"
                />
              </CardActionArea>
            </Card>
          </Grid>
          {/* Img3 */}
          <Grid item>
            <Card className={classes.Card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C0A883EAB54DDDC924018D08CF4555EE72B3E9A8C214BDADF29CB82B5E2275D7/scale?width=400&aspectRatio=1.78&format=jpeg"
                />
              </CardActionArea>
            </Card>
          </Grid>
          {/* Img4 */}
          <Grid item>
            <Card className={classes.Card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01666FAA085FF29B709DB13975E563E5E047DAAFF7D8F331201CB73F3C30027E/scale?width=400&aspectRatio=1.78&format=jpeg"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Recommend;
