import { createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitialState  {
    isAuth: boolean,
    userName: string,
    userAvatar: string,
    uid: string,
    isModerator: boolean
}

const initialState = {
    value : {
        isAuth: false,
        userName: "",
        userAvatar: "",
        uid: "",
        isModerator: false
    } as InitialState
}

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState 
        },
        logIn: (state, action: PayloadAction<string>) => {
            return{
                value: {
                    isAuth: true,
                    userName: action.payload,
                    userAvatar: action.payload,
                    uid: "dasdasdasd",
                    isModerator:false
                }
            }
        }
    }
})

export const {logIn, logOut} = auth.actions;
export default auth.reducer;