import React from "react";
import useStyles from "./Styles";
import Carousel from 'react-bootstrap/Carousel'
import s1 from './img/s1.jpg'
import s2 from './img/s2.jpg'
import s3 from './img/s3.jpg'
import s4 from './img/s4.jpg'



function Slider() {
  const classes = useStyles();
  return (
    <div className={classes.Slider} >
      <Carousel fade className={classes.Carousel} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s4}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
