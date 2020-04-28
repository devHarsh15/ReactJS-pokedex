import React from "react";
import "./Pokecard.css"
const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

class Pokecard extends React.Component{
    render() {
        let Img = `${imgUrl}${this.props.id}.png`
        return (
            <div className="Pokecard">
                <h2>{this.props.name}</h2>
                <img src={Img} />
                <h5>{this.props.type}</h5>
                <p>{this.props.exp}</p>
            </div>
        )
    }
}

export default Pokecard