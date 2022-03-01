import Body from "./Body"
import Header from "./Header"
import Footer from "./Footer"
import useStyles from "../styles"

function Page() {
    const classes = useStyles();
    return <div>
        <Header classes = {classes}/>
        <Body classes = {classes}/>
        <Footer classes = {classes}/>
        
        </div>
}
//BODY SE ALTERA DEPENDENDO DA OPÇAO DO MENU (PASSA UM PARAMETRO PARA DIZER QUAL FOI ESCOLHIDO)
export default Page;