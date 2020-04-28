import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css"

class Pokedex extends React.Component{
    static defaultProps = {
        pokemon: [
            {id: 4, name: "Charmander", type: "fire", exp: 62},
            {id: 7, name: "Squirtle", type: "water", exp: 63},
            {id: 11, name: "Metapod", type: "bug", exp: 72},
            {id: 12, name: "Butterfree", type: "flying", exp: 162},
            {id: 25, name: "Pikachu", type: "electric", exp: 98},
            {id: 39, name: "Jigglypuff", type: "normal", exp: 112},
            {id: 94, name: "Gengar", type: "poison", exp: 200},
            {id: 133, name: "Eevee", type: "normal", exp: 88}
        ]
    }
    render() {
        return (
            <div className="Allcards">
                {
                    this.props.pokemon.map((pokemon) => {
                        return (
                            <Pokecard
                                id={pokemon.id}
                                name={pokemon.name}
                                type={pokemon.type}
                                exp={pokemon.exp}
                                imgId={pokemon.id}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Pokedex