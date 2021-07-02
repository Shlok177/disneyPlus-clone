import React from 'react'
import useStyles from './Styles'
import { Typography, Container, Grid, Card, CardActionArea, CardMedia } from '@material-ui/core'

function Orginals() {
    const classes = useStyles();
    return (
        <div className={classes.Main} >
                <Typography variant='h4' className={classes.text} >Originals</Typography>
            <Container maxWidth='xl' className={classes.Container} >
                <Grid container spacing={2} className={classes.gridContainer} >
                    {/* Image 1 */}
                    <Grid item >
                        <Card className={classes.Card} >
                            <CardActionArea>
                                <CardMedia 
                                    component='img'
                                    image='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F8D1A6FD00ED479CC5E2E5C3E85F10EB05550748BD3C0FE76756614071968541/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals'
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    {/* Image 2 */}
                    <Grid item >
                        <Card className={classes.Card} >
                            <CardActionArea>
                                <CardMedia 
                                    component='img'
                                    image='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A13BEC78ACF76FC91A94A1595A62A42CC26DFC6259332C74E061ADA379024E5C/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals'
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    {/* Image 3 */}
                    <Grid item >
                        <Card className={classes.Card} >
                            <CardActionArea>
                                <CardMedia 
                                    component='img'
                                    image='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E486A02FA7B60669E77958D4FAE567AA5C9C57344006E1D1ADFC080719545166/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals'
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    {/* Image 4 */}
                    <Grid item >
                        <Card className={classes.Card} >
                            <CardActionArea>
                                <CardMedia 
                                    component='img'
                                    image='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CC08686E87BDB2D83A46C9608CB2F43018381A82608C380649351A00ED0D2919/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals'
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    {/* END */}
                </Grid>
            </Container>
        </div>
    )
}

export default Orginals
