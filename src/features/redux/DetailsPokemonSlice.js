import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {client} from "../../api/client";

const initialState = {
    resultDetailsPokemon : [],
    resultDetailsSpeciePokemon : [],
    statusDetailsPokemonQuery: 'idle',
    statusDetailsSpeciePokemonQuery: 'idle',
}

//requete
export const queryDetailsPokemonUrl = createAsyncThunk('detailsPokemon/pokemon',async query => {
    return await client.get(query)
})

export const queryDetailsSpeciePokemon = createAsyncThunk('detailsPokemon/specie',async query => {
    return await client.get(query)
})


const detailsPokemon = createSlice({
    name: 'detailsPokemon',
    initialState,
    reducers: {
        statusPokemonDetails(state, action){
            state.statusDetailsPokemonQuery = action.payload.StatusDetails
            state.statusDetailsSpeciePokemonQuery = action.payload.StatusDetailsSpecie
        },
    },
    extraReducers: {
        [queryDetailsPokemonUrl.fulfilled]: (state, action) => {
            state.statusDetailsPokemonQuery = 'succeeded'
            // Add any fetched documents hits to the array
            state.resultDetailsPokemon = action.payload
        },
        [queryDetailsSpeciePokemon.fulfilled]: (state, action) => {
            state.statusDetailsSpeciePokemonQuery = 'succeeded'
            // Add any fetched documents hits to the array
            state.resultDetailsSpeciePokemon = action.payload
        },
    },
})


//action
export const { statusPokemonDetails } = detailsPokemon.actions
export const ResultDetailsPokemon = state => state.detailsPokemon.resultDetailsPokemon
export const ResultDetailsSpeciePokemon = state => state.detailsPokemon.resultDetailsSpeciePokemon
export const StatusDetails = state => state.detailsPokemon.statusDetailsPokemonQuery
export const StatusDetailsSpecie = state => state.detailsPokemon.statusDetailsSpeciePokemonQuery
export default detailsPokemon.reducer
