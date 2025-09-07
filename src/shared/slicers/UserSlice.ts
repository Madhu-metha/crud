import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Users } from "../models/UserModel";

const defaultValue: Users = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    website: ''
};

const userSlice = createSlice({
    name: 'Users',
    initialState: defaultValue,
    reducers: {
        setUserData: (state: Users, data: PayloadAction<Users>) => {
            state.id = data.payload.id;
            state.name = data.payload.name;
            state.email = data.payload.email;
            state.phone = data.payload.phone;
            state.website = data.payload.website;
        }
    }
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;