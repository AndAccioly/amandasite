import ArtigoCard from "./artigos/ArtigoCard"


const LINK_ARTIGO = "/artigos/artigo"

function splitArrayEmGupos(arr, len) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
    return chunks;
}

function Artigos(props){
    const classes = props.classes
    var items = []

    items.push(<ArtigoCard classes={classes} url={LINK_ARTIGO}/>)
    items.push(<ArtigoCard classes={classes} url={LINK_ARTIGO}/>)
    items.push(<ArtigoCard classes={classes} url={LINK_ARTIGO}/>)
    items.push(<ArtigoCard classes={classes} url={LINK_ARTIGO}/>)
    items.push(<ArtigoCard classes={classes} url={LINK_ARTIGO}/>)
    items.push(<ArtigoCard classes={classes} url={LINK_ARTIGO}/>)
    items.push(<ArtigoCard classes={classes} url={LINK_ARTIGO}/>)
    items.push(<ArtigoCard classes={classes} url={LINK_ARTIGO}/>)
 

    
    var itemGroups = splitArrayEmGupos(items, 3)
    console.log(itemGroups)
    return (

        
        <div className = {classes.artigosPage}>
         {itemGroups.map((grupo, index) => {
              return (<div className = {classes.grupoArtigos}>
                  {grupo.map( (artigo, i) => {
                      
                      return(
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



//   <div>
// {items.map((grupo, index) => {
//     console.log("grupo " + grupo[1])
//     console.log(" quebra linha " + index)
//     return (<div className = {classes.grupoArtigos}>
//         {items[index].map( (artigo, i) => {
//             <p>a</p>
//         })}
//     </div>)
// })}
// </div>