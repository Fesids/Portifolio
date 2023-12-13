import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IRepository } from "../../models/Repository";
import axios from "axios";

interface RepositoriesState{
    repositories: IRepository[],
    status: string,
    error: any
}

const initialState: RepositoriesState={
    repositories: [],
    status: "idle",
    error: undefined
}

export const fetchRepositoryByUrl = createAsyncThunk(
    "repository/fetchByUrl",
    async (url: string, thunkAPI) =>{
        const response = await axios.get(url);
        return response.data;
    }
)


export const RepositorySlice = createSlice({

    name: "repository",
    initialState,
    reducers:{

    },
    extraReducers(builder) {
        builder.addCase(fetchRepositoryByUrl.pending, (state, action)=>{
            state.status = 'loading'
        })
        .addCase(fetchRepositoryByUrl.fulfilled, (state, action) =>{
            state.status = 'succeded',
            state.repositories.push(action.payload);
        })
        .addCase(fetchRepositoryByUrl.rejected, (state, action)=>{
            state.status = "rejected",
            state.error = action.error.message
        });
    },
})

//export default RepositorySlice.reducer;