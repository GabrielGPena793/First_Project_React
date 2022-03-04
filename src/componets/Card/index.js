import "./styles.css"


export default function Card(props){

    return(
        <div className="card">
            <img src={props.item.image} alt="imagem exemplo" className="card_img"/>
            <div className="card-container-title">
                <h2 className="card-title">{props.item.titulo}</h2>
                <p className="card-description">{props.item.description}</p>
            </div>
        </div>
    )
}