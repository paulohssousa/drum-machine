import { configureStore } from "@reduxjs/toolkit"
import drumReducer from './drum'

export default configureStore({
    reducer: {
        drum: drumReducer
    }
})