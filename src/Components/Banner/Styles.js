import { makeStyles } from "@material-ui/core/Styles";

import hoverDisney from './Img/hoverDisney.jpg'
import hoverNational from './Img/hoverNational.jpg'
import hoverPixar from './Img/hoverPixar.jpg'
import hoverStar from './Img/hoverStar.jpg'

const useStyles = makeStyles((theme) => ({
    Banner: {
        marginTop: "5rem",
        display: 'flex',
        height: '100%',
        width: '100%'
    },
    Grid: {
        justifyContent: "center",
        height: '100%',
        width: '100%'
    },
    starImg: {
        height: '180px',
    },
    disneyBTN: {
        boxShadow: 'rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px',
        borderRadius: '35px',
        border: '2px solid gray',
        width: '100%',
        height: '100%',
        '&:hover': {
            backgroundImage: `url(${hoverDisney})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            border: '2px solid white',
          }
    },
    marvelsBTN: {
        boxShadow: 'rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px',
        borderRadius: '35px',
        border: '2px solid gray',
        width: '100%',
        height: '100%',
        '&:hover': {
            backgroundColor: '#ec1923',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            border: '2px solid white',
          }
    },
    nationalBTN: {
        boxShadow: 'rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px',
        borderRadius: '35px',
        border: '2px solid gray',
        width: '100%',
        height: '100%',
        '&:hover': {
            backgroundImage: `url(${hoverNational})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            border: '2px solid white',
          }
    },
    pixarBTN: {
        boxShadow: 'rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px',
        borderRadius: '35px',
        border: '2px solid gray',
        width: '100%',
        height: '100%',
        '&:hover': {
            backgroundImage: `url(${hoverPixar})`,
            backgroundRepeat: 'no-repeat',
            border: '2px solid white',
          }
    },
    starBTN: {
        boxShadow: 'rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px',
        borderRadius: '35px',
        border: '2px solid gray',
        width: '100%',
        height: '100%',
        '&:hover': {
            backgroundImage: `url(${hoverStar})`,
            backgroundRepeat: 'no-repeat',
            border: '2px solid white',
          }
    },
    Grid2: {
        justifyContent: "center",
        height: '100%',
        width: '100%'
    },
    starImg2: {
        height: '100px',
    },
    disneyBTN2: {
        boxShadow: 'rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px',
        borderRadius: '35px',
        border: '2px solid gray',
        width: '100%',
        height: '100%',
        '&:hover': {
            backgroundImage: `url(${hoverDisney})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            border: '2px solid white',
          }
    },
    marvelsBTN2: {
        boxShadow: 'rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px',
        borderRadius: '35px',
        border: '2px solid gray',
        width: '100%',
        height: '100%',
        '&:hover': {
            backgroundColor: '#ec1923',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            border: '2px solid white',
          }
    },
    nationalBTN2: {
        boxShadow: 'rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px',
        borderRadius: '35px',
        border: '2px solid gray',
        width: '100%',
        height: '100%',
        '&:hover': {
            backgroundImage: `url(${hoverNational})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            border: '2px solid white',
          }
    },
    pixarBTN2: {
        boxShadow: 'rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px',
        borderRadius: '35px',
        border: '2px solid gray',
        width: '100%',
        height: '100%',
        '&:hover': {
            backgroundImage: `url(${hoverPixar})`,
            backgroundRepeat: 'no-repeat',
            border: '2px solid white',
          }
    },
    starBTN2: {
        boxShadow: 'rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px',
        borderRadius: '35px',
        border: '2px solid gray',
        width: '100%',
        height: '100%',
        '&:hover': {
            backgroundImage: `url(${hoverStar})`,
            backgroundRepeat: 'no-repeat',
            border: '2px solid white',
          }
    }

}))

export default useStyles