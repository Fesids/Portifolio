import { configureStore } from "@reduxjs/toolkit";
import { RepositorySlice } from "./features/repositories";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";


export const store = configureStore({
    reducer: {
        repository: RepositorySlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export  const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;