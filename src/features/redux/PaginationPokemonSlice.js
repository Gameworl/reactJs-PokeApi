import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {client} from "../../api/client";

const initialState = {
    resultPaginationPokemon : [],
    statusPaginationPokemonQuery: 'idle',
    selected: '',
    page: 1,
    statuslisteTypePokemonQuery: 'idle',
    resultlisteType: [],
    statuslisteType: 'idle',
    listeType: []
}


export const queryAllPokemonPagination = createAsyncThunk('ListePokemon',async query => {
    return await client.get(query)
})

export const queryListeTypePokemon = createAsyncThunk('ListeTypePokemon',async query => {
    const response = await client.get("https://pokeapi.co/api/v2/type/"+query)
    return response.pokemon
})


export const queryTypePokemon = createAsyncThunk('ListeType',async () => {
    const response = await client.get("https://pokeapi.co/api/v2/type")
    return response.results
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
        [queryTypePokemon.fulfilled]: (state, action) => {
            state.statuslisteType = 'succeeded'
            // Add any fetched documents hits to the array
            state.listeType = action.payload
        },
        [queryListeTypePokemon.fulfilled]: (state, action) => {
            state.statuslisteTypePokemonQuery = 'succeeded'
            // Add any fetched documents hits to the array
            let count = 10
            for(let min = 0; min < action.payload.length;min+=count){
                state.resultlisteType[min/count] = action.payload.slice(min,min+count)
            }
        },
    },
})


//action
export const { selectedPokemon, selectedPage } = paginationPokemon.actions
export const ResultPaginationPokemon = state => state.paginationPokemon.resultPaginationPokemon
export const StatusPagination = state => state.paginationPokemon.statusPaginationPokemonQuery
export const ResultListeTypePokemon = state => state.paginationPokemon.resultlisteType
export const ResultTypePokemon = state => state.paginationPokemon.listeType
export const StatusTypePokemon = state => state.paginationPokemon.statuslisteType
export const StatusListeTypePokemon = state => state.paginationPokemon.statuslisteTypePokemonQuery
export const selectedUrl = state => state.paginationPokemon.selected
export const Page = state => state.paginationPokemon.page
export default paginationPokemon.reducer
