import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {client} from "../../api/client";

const initialState = {
    resultPaginationPokemon : [],
    statusPaginationPokemonQuery: 'idle',
    selected: '',
    page: 1
}


export const queryAllPokemonPagination = createAsyncThunk('paginationPokemon',async query => {
    return await client.get(query)
})


const paginationPokemon = createSlice({
    name: 'paginationPokemon',
    initialState,
    reducers: {
        selectedPokemon(state, action){
            state.selected = action.payload.selected
        },
        selectedPage(state, action){
            state.page = action.payload.page
        }
    },
    extraReducers: {
        [queryAllPokemonPagination.fulfilled]: (state, action) => {
            state.statusPaginationPokemonQuery = 'succeeded'
            // Add any fetched documents hits to the array
            state.resultPaginationPokemon = action.payload
        },
    },
})


//action
export const { selectedPokemon, selectedPage } = paginationPokemon.actions
export const ResultPaginationPokemon = state => state.paginationPokemon.resultPaginationPokemon
export const StatusPagination = state => state.paginationPokemon.statusPaginationPokemonQuery
export const selectedUrl = state => state.paginationPokemon.selected
export const Page = state => state.paginationPokemon.page
export default paginationPokemon.reducer
