import { makeStyles } from '@material-ui/core/Styles'

const useStyles = makeStyles((theme) => ({
    Movies: {
        marginTop: '5rem',
        color: 'white',
        display: 'inline',
        fontFamily: [
            'Roboto',
            'sans-serif'
          ].join(','),
    }
}))

export default useStyles;