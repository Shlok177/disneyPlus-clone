import { makeStyles } from '@material-ui/core/Styles'
import Background from '../../../Home/Background.png'

const useStyles = makeStyles((theme) => ({
    Main: {
        justifyContent: 'center',
        justifyItems: 'center',
        justifySelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '5rem'
    },
    text: {
        paddingLeft: '15px'
    },
    Container: {
        marginTop: '2rem',
        justifyContent: 'center',
        margin: "auto",
        justifyContent: 'center',
        justifyItems: 'center',
        justifySelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    gridContainer: {
        justifyContent: 'center',
        justifyItems: 'center',
        justifySelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: "100%",
        display: 'flex',
    },
    Card: {
        backgroundImage: `url(${Background})`,
        height: '100%',
        width: '100%',
        border: '2px solid gray',
        boxShadow: 'rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px',
        borderRadius: '20px',
        '&:hover': {
            border: '2px solid white',
            height: '102%',
            width: '102%'
        }
    },
}))

export default useStyles;