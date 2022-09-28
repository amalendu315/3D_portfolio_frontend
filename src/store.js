import { configureStore } from "@reduxjs/toolkit"
import { loginReducer, logoutReducer, updateReducer, userReducer } from "./reducers/user";

const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
        logout: logoutReducer,
        update: updateReducer,
    },
});

export default store;