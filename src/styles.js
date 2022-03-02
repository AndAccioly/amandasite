import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    root: {
        backgroundColor: '#f5e689',
    },
    faixaTopo: {
        height: '10px',
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
        height: '800px'
    },
    footer: {
        padding: '1%',
        backgroundColor: '#f5e689',
    },
    
    menuLink: {
        color: 'black',
        textDecoration: 'none',
        "&:hover": {
            color: '#baac50'
        }
    },
    logosHeader: {
        textAlign: 'left',
    },
    logo: {
        width: '7%',
        height: 'auto'
    },
    logoNome: {
        width: '20%',
        height: 'auto',
        marginLeft: '20px'
    },
    instaIcon: {
        width: '2%',
        height: 'auto',
    },
    
    
})
export default useStyles;

