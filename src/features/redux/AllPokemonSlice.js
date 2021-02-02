import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {client} from "../../api/client";

const initialState = {
    resultsAllPokemon : [],
    statusAllPokemonQuery: 'idle',
}

export const queryAllPokemon = createAsyncThunk('allPokemon/',async () => {
    const response = await client.get('https://pokeapi.co/api/v2/pokemon?limit=1118')
    return response.results
})


const allPokemon = createSlice({
    name: 'allPokemon',
    initialState,
    reducers: {
    },
    extraReducers: {
        [queryAllPokemon.fulfilled]: (state, action) => {
            state.statusAllPokemonQuery = 'succeeded'
            // Add any fetched documents hits to the array
            state.resultsAllPokemon = action.payload
        }
    },
})


//action
export const ResultsPokemonList = state => state.allPokemon.resultsAllPokemon
export const StatusList = state => state.allPokemon.statusAllPokemonQuery
export default allPokemon.reducer
