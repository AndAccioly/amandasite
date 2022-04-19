import ArtigoCard from "./artigos/ArtigoCard"
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';

function Artigos(props){
    const LINK_ARTIGO = "/artigos/artigo"
    const classes = props.classes
    return (
        <div> 
            <ArtigoCard classes={props.classes} url={LINK_ARTIGO}/> 
            <ArtigoCard classes={props.classes} url={LINK_ARTIGO}/> 
        </div>
    );
}

export default Artigos;