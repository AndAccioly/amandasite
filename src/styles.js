import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    root: {
        backgroundColor: '#f5e689',
    },
    header: {
        display: 'flex',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: '2%',
        boxShadow: '0px 4px 8px -2px #888888',

    },
    body: {
        backgroundColor: 'white',
        paddingBottom: '50px',
        boxShadow: '0px 4px 8px -2px #888888',
    },
    footer: {
        marginTop: '10px',
        backgroundColor: 'white',
    },
    logo: {
        width: '7%'
    }
})
export default useStyles;

