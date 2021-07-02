import React from 'react'
import useStyles from './Styles'
import { Typography, Container, Grid, Card, CardActionArea, CardMedia } from '@material-ui/core'

function Trending() {
    const classes = useStyles()
    return (
        <div className={classes.Main} >
            <Typography variant='h4' className={classes.text} >Trending</Typography>
            <Container maxWidth='xl' className={classes.Container} >
                <Grid container spacing={2} className={classes.gridContainer} >
                    {/* Image 1 */}
                    <Grid item >
                        <Card className={classes.Card} >
                            <CardActionArea>
                                <CardMedia 
                                    component='img'
                                    image='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0ECD36DD35658155915685271440833C29ED87E788CF8AE111AA6BCA6B939C37/scale?width=400&aspectRatio=1.78&format=jpeg'
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
                                    image='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg'
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
                                    image='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/509E4D9F0BF98A9DC4CDD38954380782F6AB2664E503CC7652A37D18D06666BF/scale?width=400&aspectRatio=1.78&format=jpeg'
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
                                    image='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg'
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

export default Trending
