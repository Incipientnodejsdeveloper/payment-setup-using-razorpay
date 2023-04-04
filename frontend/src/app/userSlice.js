import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        client: (state, actions) => {
            state.value = actions.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { client } = userSlice.actions

export default userSlice.reducer