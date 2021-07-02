import React from 'react'
import useStyles from './Styles.js'

import Background from './Background.png'

import Header from '../Header/Header.js';
import Slider from '../Slider/Slider.js';
import Banner from '../Banner/Banner.js';
import Movies from '../Movies/Movies'

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.Main} style={{ backgroundImage: `url(${Background})` }} >
            <Header />
            <Slider />
            <Banner />
            <Movies />
        </div>
    )
}

export default Home
