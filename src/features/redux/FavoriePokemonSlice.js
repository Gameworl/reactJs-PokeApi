import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    resultsFavorie : [],
}



const favoriePokemon = createSlice({
    name: 'favoriePokemon',
    initialState,
    reducers: {
        ListPokemon(state, action){
            let nextState;
            switch (action.payload.type) {
                default:
                    break
                case "ADD":
                    nextState = {
                        ...state, // copie du state actuel (préserve toutes les valeurs du state actuel)
                        resultsFavorie: [...state.resultsFavorie, action.payload.resultsFavorie], // Ajout du nouvel objet
                    }
                    return nextState;
                case "REMOVE":
                    nextState = {
                        ...state, // copie du state actuel (préserve toutes les valeurs du state actuel)
                        resultsFavorie: [...state.resultsFavorie],
                    };
                    nextState.resultsFavorie.forEach(element => {
                        if (element.name === action.payload.resultsFavorie.name) {
                            nextState.resultsFavorie.splice(
                                nextState.resultsFavorie.indexOf(element),
                                1,
                                );
                        }
                    });
                    return nextState;
                    // Retourne le nouveau state ou l'ancien en cas de problème (nextState undefined)
            }
        },
    },
})


//action
export const { ListPokemon} = favoriePokemon.actions
export const resultsFavoriePokemon = state => state.favoriePokemon.resultsFavorie
export default favoriePokemon.reducer
