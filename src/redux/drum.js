import { createSlice } from "@reduxjs/toolkit";

export const drumSlice = createSlice({
    name: "drum",
    initialState: {
        drumPad: ""
    },
    reducers: {
        displayDrumPad: (state, action) => {
            state.drumPad = action.payload;
        }
    }
});

export const { displayDrumPad } = drumSlice.actions;

export default drumSlice.reducer;