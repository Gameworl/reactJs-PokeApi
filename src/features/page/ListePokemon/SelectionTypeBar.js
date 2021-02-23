import React from "react";

/**
 * Select pour selectionner le type de pokemon voulue
 * @param props
 * @returns {*}
 * @constructor
 */
export const SelectionTypeBar = (props) => {

    const handleSelect= e => {
        console.log(e.target.value)
        props.recherche(e.target.value)
    }

    return(
        <div>
            <select onChange={handleSelect} className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option defaultValue>Selectionner un type ...</option>
                {props.types.filter(pokemon =>
                    pokemon.name !== "shadow" && pokemon.name !== "unknown"
                  ).map(ptype => {

                        return <option key={ptype.name}>{ptype.name}</option>
                })}
            </select>
        </div>

    );
}
