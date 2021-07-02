import { makeStyles } from "@material-ui/core/Styles";
import Background from './Background.png'

const useStyles = makeStyles((theme) => ({
    Main: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: '100%',
        paddingBottom: '5rem'
    }
}))

export default useStyles