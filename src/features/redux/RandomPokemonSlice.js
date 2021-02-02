import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {client} from "../../api/client";

const initialState = {
    resultRandomPokemon : [],
    resultRandomSpeciePokemon : [],
    statusRandomPokemonQuery: 'idle',
    statusRandomSpeciePokemonQuery: 'idle',
}


export const queryRandomPokemon = createAsyncThunk('randomPokemon/focus',async query => {
    return await client.get(query)
})

export const queryRandomSpeciePokemon = createAsyncThunk('randomPokemon/specie',async query => {
    return await client.get(query)
})


const randomPokemon = createSlice({
    name: 'randomPokemon',
    initialState,
    reducers: {
        statusPokemonRandom(state, action){
            state.statusRandomPokemonQuery = action.payload.statusRandomPokemonQuery
            state.statusRandomSpeciePokemonQuery = action.payload.statusRandomSpeciePokemonQuery
        },
    },
    extraReducers: {
        [queryRandomPokemon.fulfilled]: (state, action) => {
            state.statusRandomPokemonQuery = 'succeeded'
            // Add any fetched documents hits to the array
            state.resultRandomPokemon = action.payload
        },
        [queryRandomSpeciePokemon.fulfilled]: (state, action) => {
            state.statusRandomSpeciePokemonQuery = 'succeeded'
            // Add any fetched documents hits to the array
            state.resultRandomSpeciePokemon = action.payload
        },
    },
})


//action
export const { statusPokemonRandom } = randomPokemon.actions
export const ResultRandomPokemon = state => state.randomPokemon.resultRandomPokemon
export const ResultRandomSpeciePokemon = state => state.randomPokemon.resultRandomSpeciePokemon
export const StatusRandom = state => state.randomPokemon.statusRandomPokemonQuery
export const StatusRandomSpecie = state => state.randomPokemon.statusRandomSpeciePokemonQuery
export default randomPokemon.reducer
