import Home from "./Home"
import Artigos from "./artigos/Artigos"
import SobreMim from "./SobreMim"
import Agendamento from "./Agendamento"
import Artigo from "./artigos/Artigo"

function defineCorpo(corpoId, classes){
    switch(corpoId){
        case 2:
            return <Artigos classes={classes}/>
        case 21:
            return <Artigo />
        case 3:
            return <SobreMim classes={classes}/>
        case 4:
            return <Agendamento classes={classes}/>
        default:
            return <Home classes={classes}/>

    }
}

function Body(props) {
    const classes = props.classes;
    return (
        <div className={classes.wrapper}>
            {defineCorpo(props.corpo, classes)}
        </div>
    )
}


export default Body;