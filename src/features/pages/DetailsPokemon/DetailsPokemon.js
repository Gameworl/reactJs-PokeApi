import React, {useEffect, useState} from "react";
import {ResultDetailsPokemon, ResultDetailsSpeciePokemon} from "../../redux/DetailsPokemonSlice";
import { useSelector} from "react-redux";
import {FrontCard} from "./frontCard";
import {BackCard} from "./backCard";
import ReactCardFlip from "react-card-flip";
import "./styles/DetailsPokemonStyle.scss"


export const DetailsPokemon = () => {
    const pokemonInfo = useSelector(ResultDetailsPokemon)
    const pokemonSpecie = useSelector(ResultDetailsSpeciePokemon)


    const [change, setChange] = useState(false)
    let [detailsDescription, setDescription] = useState()
    let [detailsName, setName] = useState()
    let [detailsVersion, setVersion] = useState()
    let [habitat, setHabitat] = useState("inconnue")

    useEffect(()=>{
        getDetailsResume()
        getDetailsName()
        gethabitatName()
        console.log(habitat)
    })
    /**
     * Verifie si le nom de l'habitat du pokemon est connue
     */
    const gethabitatName = () => {
        if (pokemonSpecie.habitat !== null)
        setHabitat(pokemonSpecie.habitat.name )
    }
    /**
     * Recupère la description du pokemon en langue fr
     */
    const getDetailsResume = () => {
        pokemonSpecie.flavor_text_entries.forEach(texte => {
            if (texte.language.name === "fr" ){
                if (texte.flavor_text.length !== 0){
                    setDescription(texte.flavor_text)
                    setVersion(texte.version.name)

                }
            }
        })
    }

    /**
     * recupere le nom du pokemon en francais
     */
    const getDetailsName = () =>{
        pokemonSpecie.names.forEach(name => {
            if(name.language.name === "fr"){
                setName(name.name)
            }
        })

    }

    /**
     * gère le flip de la carte du pokemon
     */
    const  flip=() =>{
        setChange(!change)
    }


    /**
     * Front de la carte du pokemon
     */
    const frontCard =  <div className="card border-0" style={{width: 18+"rem", height: "fit-content"}} >
        <FrontCard pokemonInfo={pokemonInfo} name={detailsName} description={detailsDescription} version={detailsVersion}/>
        <span onClick={()=>flip()} className="badge badge-secondary rounded-bottom" style={{cursor: "pointer"}}>
                <img className="logo" src={"/assets/pokeIcon.jpg"} alt={"logo"}/>
                Plus d'information
                <img className="logo" src={"/assets/pokeIcon.jpg"} alt={"logo"}/>
        </span>
    </div>;

    /**
     * Back de la card du pokemon
     */
    const backCard = <div className="card border-0" style={{width: 30+"rem", height: "fit-content"}} onClick={()=>flip()}>
        <BackCard pokemonInfo={pokemonInfo} name={detailsName} pokemonSpecie={pokemonSpecie} habitat={habitat}/>
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
