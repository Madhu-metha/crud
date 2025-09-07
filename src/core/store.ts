import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../shared/slicers/UserSlice";

const store = configureStore({
    reducer: {
        User: UserSlice
    }
});

export default store;