import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    menuIconStyle: {
        transform: 'scale(1.8)'
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5e689',
    },

    header: {
        marginTop: '1%',
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
        marginTop: '1%',
        height: '800px'
    },
    footer: {
        marginTop: '1%',
        padding: '1%',
        backgroundColor: '#baac50',
        display: 'flex'
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
        padding: '1% 1%'
    },
    logo: {
        width: '9%',
        height: 'auto'
    },
    logoNome: {
        width: '25%',
        height: 'auto'
    },
    instaIcon: {
        width: '4%',
        height: 'auto',
    },
    iconsInfo: {
        alignItems: 'center', 
        textAlign: 'left',
        display: 'flex',
        padding: '2px'
    },
    imgFooter: {
        width: '50%',
        padding: '1%'
    },
    menuIcon: {
        "&:hover": {
            fill: '#baac50'
        }
    },
    
    
})
export default useStyles;

