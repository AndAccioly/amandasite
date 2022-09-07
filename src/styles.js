import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    menuIconStyle: {
        transform: 'scale(1.8)'
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5e689',
        height: '100%',
        minHeight: '100%',
        position: 'absolute',
        width: '100%',
        minWidth: '100%'
    },

    header: {
        display: 'flex',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingRight: '2%',
        boxShadow: '0px 4px 8px -2px #888888',
        position: 'fixed',
        zIndex: '5',
    },
    wrapper: {
        backgroundColor: 'white',
        boxShadow: '0px 4px 8px -4px #888888',
        marginTop:'5%',
        flex: '1',
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
    footerLink: {
        color: 'white',
        textDecoration: 'none',
        "&:hover": {
            color: 'black'
        }
    },
    logosHeader: {
        textAlign: 'left',
        padding: '1% 1%'
    },
    logo: {
        width: '5%',
        height: 'auto',
        marginLeft: '3%'
    },
    logoNome: {
        width: '15%',
        height: 'auto',
        paddingLeft: '2%'
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
    artigoCard: {
        marginTop: '1%',
        display: 'inline-block'
    },
    imagemPerfil: {
        borderRadius: '50%',
        width: '30%',
    },
    imagemCalendario:{
        borderRadius: '50%',
        width: '44%',
        marginLeft: '5%',
    },
    fundoPreviewSobreMim: {
        padding: '2%',
        backgroundColor:'#f5e689',
        display: 'flex',
    },
    fundoPreviewArtigos: {
        height: '350px',
        display: 'flex',
    },
    fundoPreviewAgendamento: {
        padding: '2%',
        backgroundColor:'#f5e689',
        display: 'flex',
    },
    fundoSobreMim:{
        backgroundColor:'#f5e689',
        height: '1000px'
    },
    textoPreviewSobreMim: {
        marginLeft: '5%',
        display: 'flex',
    },

    agendamentoForm: {
        display: 'inline-flex',
        marginTop: '4%'
    },
    agendamentoFormItem:{
        marginLeft: '10px',
        '& label.Mui-focused': {
            color: '#baac50',
          },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#baac50',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'black',
            },
            '&:hover fieldset': {
              borderColor: '#baac50',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#baac50',
            },
        },
    },
    agendamentoFormText: {
        marginLeft: '10px',
        '& label.Mui-focused': {
            color: '#baac50',
          },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#baac50',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'black',
            },
            '&:hover fieldset': {
              borderColor: '#baac50',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#baac50',
            },
        },
    },

    grupoArtigos: {
        display: 'flex',
        marginBottom: '5%'
    },
    artigosPage: {
        marginTop: '5%',
        marginLeft: '15%',
        marginRight: '15%',
    },

    
    
})
export default useStyles;

