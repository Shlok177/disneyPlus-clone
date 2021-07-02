import React from 'react'
import useStyles from './Styles'
import { Container,Grid,Card,CardActionArea,CardMedia,Typography } from '@material-ui/core'

function New() {
  const classes = useStyles();
  return (
    <div className={classes.Main} >
      <Typography variant='h4' className={classes.text} >New To Disney+</Typography>
      <Container maxWidth='xl' className={classes.Container}>
        <Grid container spacing={2} className={classes.gridContainer}>
          {/* Image 1 */}
          <Grid item >
            <Card className={classes.Card} >
              <CardActionArea>
                <CardMedia 
                  component= 'img'
                  image='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/341AE85B6C1423B9042B5F2E786645EE551B9D546C3D263B220A4727617FD2B8/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals'
                />
              </CardActionArea>
            </Card>
          </Grid>
          {/* Image 2 */}
          <Grid item >
            <Card className={classes.Card} >
              <CardActionArea>
                <CardMedia 
                  component= 'img'
                  image='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B983FF22BA64B6E19E0D3267280819B26758CFB765E8BED1099D11E320612953/scale?width=400&aspectRatio=1.78&format=jpeg'
                />
              </CardActionArea>
            </Card>
          </Grid>
          {/* Image 3 */}
          <Grid item >
            <Card className={classes.Card} >
              <CardActionArea>
                <CardMedia 
                  component= 'img'
                  image='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1E0501AFBAFCA1ABB5D31DBA7D1A913B2A35D70FD3DFD804939B71901577161D/scale?width=400&aspectRatio=1.78&format=jpeg'
                />
              </CardActionArea>
            </Card>
          </Grid>
          {/* Image 4 */}
          <Grid item >
            <Card className={classes.Card} >
              <CardActionArea>
                <CardMedia 
                  component= 'img'
                  image='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4B32D8CB7C0C358E9FF348FB0338AD13F9A5836808E9EF5FADD9DBDE52FC3CAD/scale?width=400&aspectRatio=1.78&format=jpeg'
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default New
