import PreviewSobreMim from "./home/PreviewSobreMim"
import PreviewAgendamento from "./home/PreviewAgendamento"
import PreviewArtigos from "./home/PreviewArtigos"

function Home(props){
    const classes = props.classes
    return (
        <div> 
            <PreviewSobreMim classes = {classes}/>
            <PreviewArtigos classes = {classes} />
            <PreviewAgendamento classes = {classes} />
        </div>
    );
}

export default Home;