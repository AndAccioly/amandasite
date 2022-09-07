import ArtigoCard from "./ArtigoCard"
import { ArtigoTO } from "../../model/ArtigoTO"
import { buscarArtigoService } from "../../services/ArtigoService"

const LINK_ARTIGO = "/artigos/artigo"

function splitArrayEmGupos(arr, len) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
        chunks.push(arr.slice(i, i += len));
    }
    return chunks;
}

function Artigos(props) {
    const classes = props.classes
    var items = []
    const artigosTO = buscarArtigoService()

    artigosTO.forEach((artigoTO) => {
        items.push(<ArtigoCard classes={classes} url={LINK_ARTIGO + "/" + artigoTO.id} artigo={artigoTO} />)
    })

    var itemGroups = splitArrayEmGupos(items, 3)

    return (
        <div className={classes.artigosPage}>
            {itemGroups.map((grupo) => {
                return (<div className={classes.grupoArtigos}>
                    {grupo.map((artigo) => {
                        return (
                            <div>
                                {artigo}
                            </div>
                        )
                    })}
                </div>)
            })}
        </div>
    );
}

export default Artigos;

