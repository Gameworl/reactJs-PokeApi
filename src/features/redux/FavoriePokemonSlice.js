import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    resultsFavorie : [],
}



const favoriePokemon = createSlice({
    name: 'favoriePokemon',
    initialState,
    reducers: {
        AddPokemon(state, action){
            console.log("Add slice")
          state.resultsFavorie.push(action.payload.resultsFavorie)
        },
        RemovePokemon(state, action){
            state.resultsFavorie = state.resultsFavorie.filter(pokemon => pokemon.name !== action.payload.resultsFavorie.name)
        },
    },
})


//action
export const { AddPokemon, RemovePokemon } = favoriePokemon.actions
export const resultsFavoriePokemon = state => state.favoriePokemon.resultsFavorie
export default favoriePokemon.reducer
