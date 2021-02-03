import React, {useEffect, useState} from "react";
import {ResultDetailsPokemon, ResultDetailsSpeciePokemon} from "../../redux/DetailsPokemonSlice";
import { useSelector} from "react-redux";
import {FrontCard} from "./frontCard";
import pokeLogo from "../../../assets/pokeIcon.jpg";
import {BackCard} from "./backCard";
import ReactCardFlip from "react-card-flip";
import "./styles/DetailsPokemonStyle.scss"


export const DetailsPokemon = () => {
    const pokemonInfo = useSelector(ResultDetailsPokemon)
    const pokemonSpecie = useSelector(ResultDetailsSpeciePokemon)


    const [change, setChange] = useState(false)
    let [detailsDescription, setDescription] = useState("")
    let [detailsName, setName] = useState("")
    let [detailsVersion, setVersion] = useState("")

    useEffect(()=>{
        getDetailsResume()
        getDetailsName()
    })
    function getDetailsResume() {
        pokemonSpecie.flavor_text_entries.forEach(texte => {
            if (texte.language.name === "fr" ){
                if (texte.flavor_text.length !== 0){
                    setDescription(texte.flavor_text)
                    setVersion(texte.version.name)
                    return;
                }
            }
        })
    }

    function getDetailsName() {
        pokemonSpecie.names.forEach(name => {
            if(name.language.name === "fr"){
                setName(name.name)
            }
        })

    }

    function flip() {
        setChange(!change)
        console.log(change)
    }



    const frontCard =  <div className="card border-0" style={{width: 18+"rem", height: "fit-content"}} >
        <FrontCard pokemonInfo={pokemonInfo} name={detailsName} description={detailsDescription} version={detailsVersion}/>
        <span onClick={()=>flip()} className="badge badge-secondary rounded-bottom" style={{cursor: "pointer"}}>
                <img className="logo" src={pokeLogo} alt={"logo"}/>
                Plus d'information
                <img className="logo" src={pokeLogo} alt={"logo"}/>
            </span>
    </div>;


    const backCard = <div className="card border-0" style={{width: 30+"rem", height: "fit-content"}} onClick={()=>flip()}>
        <BackCard pokemonInfo={pokemonInfo} name={detailsName} pokemonSpecie={pokemonSpecie}/>
    </div>;

    return(
        <div  className="mt-5">
            <ReactCardFlip isFlipped={change} flipDirection="horizontal">
                {frontCard}
                {backCard}
            </ReactCardFlip>
        </div>
    );
}
