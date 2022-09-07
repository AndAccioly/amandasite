import { useParams } from "react-router-dom";

function Artigo(props) {
	const classes = props.classes

	const {id} = useParams()
	console.log(id)
	
	return (
		<div>
			<p> ESTE É UM ARTIGO ! </p>
		</div>
	);
}

export default Artigo;