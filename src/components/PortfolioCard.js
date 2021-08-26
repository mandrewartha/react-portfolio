import "./style/PortfolioCard.css"

const PortfolioCard = (props) => {
    return (
        <div className="cards">
        <div className="card" style={{width: "18rem"}}>
          <a href={props.link} target="_blank">
            <img src={props.image}
              className="card-img-top" alt="Perfect Home Picture" />
          </a>
          <div className="card-body">
              <h4 className="card-title">{props.title}</h4>
              <h5 className="card-lang" >{props.languages}</h5>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
        </div>
    )
}

export default PortfolioCard