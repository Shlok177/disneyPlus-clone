import { makeStyles } from "@material-ui/core/Styles";
import Background from '../../../Home/Background.png'

const useStyles = makeStyles((theme) => ({
    Main: {
        marginTop : '5rem',
    },
    text: {
        paddingLeft: '15px'
    },
    Container: {
        marginTop: '2rem',
    },
    gridContainer: {
        justifyContent: 'center',
        width: "100%",
        display: 'flex'
    },
    Card: {
        border: '2px solid gray',
        height: '100%',
        width: '100%',
        borderRadius: '20px',
        boxShadow: 'rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px',
        backgroundImage: `url(${Background})`,
        '&:hover': {
            border: '2px solid white',
            height: '102%',
            width: '102%',
        }
    },
}))

export default useStyles