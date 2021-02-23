import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as IconSolid from "@fortawesome/fontawesome-free-solid"
import * as IconRegular from "@fortawesome/free-regular-svg-icons";

export const BackCard = (props) => {

    const statistiques = props.pokemonInfo.stats.map(stats => (
        <li key={stats.stat.name}> {stats.stat.name} :
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: Math.round(stats.base_stat/252*100)+"%"}}
                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{stats.base_stat}
                </div>
            </div>
        </li>
    ))

    const attaque = props.pokemonInfo.abilities.map(slot =>(
        <h4 key={slot.ability.name}>
        <span className="badge badge-info badge-pill">
                {slot.ability.name}
        </span>
        </h4>
    ))

    return(
       <div>
           <div className="card-body rounded">
               <p className="card-text">
                   {props.pokemonSpecie.is_baby ?<p><span className="badge badge-success">bébé</span></p>  : ""}
                   {props.pokemonSpecie.is_legendary?<p><span className="badge badge-success">Légendaire</span></p>  : ""}
                   {props.pokemonSpecie.is_mythical?<p><span className="badge badge-success">mythique</span></p>  : ""}
                   { props.name} est le n° {props.pokemonInfo.id} dans le pokedex.
               </p>
               <p className="card-text">
                   <FontAwesomeIcon icon={IconSolid.faWeight} size="1x" /> Poids  : {parseInt(props.pokemonInfo.weight)/10} kg
               </p>
               <p className="card-text">
                    <FontAwesomeIcon icon={IconSolid.faRuler} size="1x" /> Taille : {props.pokemonInfo.height/10} m
               </p>
               <div className="alert alert-info " role="alert">
                   <p className="card-text">
                       On peut trouvez des { props.name}s dans les millieux de type {props.habitat}, le taux de chance de le capturer est de {Math.round(props.pokemonSpecie.capture_rate/255*100)}%.
                   </p>
               </div>
               <div className="card-text text-center">
                   <b>Les statistique de base de { props.name}</b>
                   <ul className="text-left">
                       {statistiques}
                   </ul>
               </div>
               <div className="card-text  text-center">
                   <b>Les attaques de base de { props.name}</b>
                   <br/>
                   {attaque}
               </div>
           </div>
       </div>
    );
}
