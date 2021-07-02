import React from "react";
import useStyles from "./Styles";
import { Grid, Container, Card, Button } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

import disney from "./Img/disney.png";
import marvels from "./Img/marvels.png";
import national from "./Img/national.png";
import pixar from "./Img/pixar.png";
import starwars from "./Img/starwars.png";

function Banner() {
  const classes = useStyles();
  const Mobile = useMediaQuery("(max-width: 390px)");
  const other = useMediaQuery("(max-width: 1990px) and (min-width: 391px)");
  return (
    <div className={classes.Banner}>
      {other && (      
      <Container maxWidth='xl' >
      <Grid container spacing={2} className={classes.Grid} >
        {/* Image 1 */}
        <Grid item  className={classes.item} >
          <Button variant="outlined" color="white" className={classes.disneyBTN}>
            <img src={disney} className={classes.starImg} />
          </Button>
        </Grid>
        {/* Image 2 */}
        <Grid item className={classes.item} >
          <Button variant="outlined" color="white" className={classes.marvelsBTN}>
            <img src={marvels} className={classes.starImg} />
          </Button>
        </Grid>
        {/* Image 3 */}
        <Grid item className={classes.item} >
          <Button variant="outlined" color="white" className={classes.nationalBTN}>
            <img src={national} className={classes.starImg} />
          </Button>
        </Grid>
        {/* Image 4 */}
        <Grid item className={classes.item} >
          <Button variant="outlined" className={classes.pixarBTN}>
            <img src={pixar} className={classes.starImg} />
          </Button>
        </Grid>
        {/* Image 5 */}
        <Grid item className={classes.item} >
          <Button variant="outlined" color="white" className={classes.starBTN}>
            <img src={starwars} className={classes.starImg} />
          </Button>
        </Grid>
        {/* END */}
      </Grid>
      </Container>
      )}

      {Mobile && (
              <Container maxWidth='xl' >
              <Grid container spacing={2} className={classes.Grid2} >
                {/* Image 1 */}
                <Grid item  className={classes.item2} >
                  <Button variant="outlined" color="white" className={classes.disneyBTN2}>
                    <img src={disney} className={classes.starImg2} />
                  </Button>
                </Grid>
                {/* Image 2 */}
                <Grid item className={classes.item2} >
                  <Button variant="outlined" color="white" className={classes.marvelsBTN2}>
                    <img src={marvels} className={classes.starImg2} />
                  </Button>
                </Grid>
                {/* Image 3 */}
                <Grid item className={classes.item2} >
                  <Button variant="outlined" color="white" className={classes.nationalBTN2}>
                    <img src={national} className={classes.starImg2} />
                  </Button>
                </Grid>
                {/* Image 4 */}
                <Grid item className={classes.item2} >
                  <Button variant="outlined" className={classes.pixarBTN2}>
                    <img src={pixar} className={classes.starImg2} />
                  </Button>
                </Grid>
                {/* Image 5 */}
                <Grid item className={classes.item2} >
                  <Button variant="outlined" color="white" className={classes.starBTN2}>
                    <img src={starwars} className={classes.starImg2} />
                  </Button>
                </Grid>
                {/* END */}
              </Grid>
              </Container>
      )}
    </div>
  );
}

export default Banner;
