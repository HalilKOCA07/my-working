import {configuresStore} from "@reduxjs/toolkit"
import blogReducer from "../features/CardSlice"


const Store = confiuresStore({
    reducer: {
        blog: blogReducer,
    },
    devTools:process.env.NODE_ENV !=="production",
});

export default Store