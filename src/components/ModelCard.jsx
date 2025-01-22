import './ModelCard.css'

export default function ModelCard(props) {
    return (
        <div class="card">
            <img src={props.img}
                alt="Card image" />
            <div class="card-content">
                <h2 class="card-title">
                    {props.title}
                </h2>
                <p class="card-description">
                    {props.description}
                </p>
                <a href={props.link} target='_blank'>
                    <button class="card-button">
                        Read More...
                    </button>
                </a>
            </div>
        </div>
    )
}