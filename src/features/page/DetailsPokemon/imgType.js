import React from "react";
import typeBug from "../../../assets/types/bug.png";
import typeDark from "../../../assets/types/dark.png";
import typeDragon from "../../../assets/types/dragon.png";
import typeElectric from "../../../assets/types/electric.png";
import typeFairy from "../../../assets/types/fairy.png";
import typeFighting from "../../../assets/types/Fighting.png";
import typeFire from "../../../assets/types/fire.png";
import typeFlying from "../../../assets/types/flying.png";
import typeGhost from "../../../assets/types/ghost.png";
import typeGrass from "../../../assets/types/grass.png";
import typeGround from "../../../assets/types/ground.png";
import typeIce from "../../../assets/types/ice.png";
import typeNormal from "../../../assets/types/normal.png";
import typePoison from "../../../assets/types/poison.png";
import typePsychic from "../../../assets/types/psychic.png";
import typeSteel from "../../../assets/types/steel.png";
import typeWater from "../../../assets/types/water.png";
import typeRock from "../../../assets/types/rock.png";
import "./styles/imgTypeStyle.scss"

export const ImgType = (props) => {
    const imgType = props.pokemonInfo.types.map(type => {
        let img;
        // eslint-disable-next-line default-case
        switch (type.type.name ) {
            case "bug" : img =  <img className={"type"} key={type.type.name} src={typeBug} alt={type.type.name}/>;
                break
            case "dark" : img = <img className={"type"} key={type.type.name} src={typeDark} alt={type.type.name}/>
                break
            case "dragon" : img =  <img className={"type"} key={type.type.name} src={typeDragon} alt={type.type.name}/>
                break
            case "electric" : img =  <img className={"type"} key={type.type.name} src={typeElectric} alt={type.type.name}/>
                break
            case "fairy" : img =  <img className={"type"} key={type.type.name} src={typeFairy} alt={type.type.name}/>
                break
            case "fighting" : img =  <img className={"type"} key={type.type.name} src={typeFighting} alt={type.type.name}/>
                break
            case "fire" : img =  <img className={"type"} key={type.type.name} src={typeFire} alt={type.type.name}/>
                break
            case "flying" : img =  <img className={"type"} key={type.type.name} src={typeFlying} alt={type.type.name}/>
                break
            case "ghost" : img =  <img className={"type"} key={type.type.name} src={typeGhost} alt={type.type.name}/>
                break
            case "grass" : img =  <img className={"type"} key={type.type.name} src={typeGrass} alt={type.type.name}/>
                break
            case "ground" : img = <img className={"type"} key={type.type.name} src={typeGround} alt={type.type.name}/>
                break
            case "ice" : img =  <img className={"type"} key={type.type.name} src={typeIce} alt={type.type.name}/>
                break
            case "normal" : img =  <img className={"type"} key={type.type.name} src={typeNormal} alt={type.type.name}/>
                break
            case "poison" : img = <img className={"type"} key={type.type.name} src={typePoison} alt={type.type.name}/>
                break
            case "psychic" : img =  <img className={"type"} key={type.type.name} src={typePsychic} alt={type.type.name}/>;
                break
            case "rock" : img =  <img className={"type"} key={type.type.name} src={typeRock} alt={type.type.name}/>;
                break
            case "steel" : img =  <img className={"type"} key={type.type.name} src={typeSteel} alt={type.type.name}/>;
                break
            case "water" : img = <img  className={"type"} key={type.type.name} src={typeWater} alt={type.type.name}/>
        }
        return img
    })

    return (
        imgType
    );
}
