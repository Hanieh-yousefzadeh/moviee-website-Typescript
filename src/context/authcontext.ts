import { createContext , useContext, type Dispatch ,type SetStateAction} from "react";


type User = {
    name : string;
    email : string;
}

type AuthContextType = {
    user : User;
    setUser : Dispatch<SetStateAction<User | null>>
}

export const AuthContext = createContext<AuthContextType | null> (null);

export function useAuthContext(){
    const context = useContext(AuthContext)
    if(!context){
        throw new Error ("useAuthContext must be used inside AuthProvider")
    }
    return context;
};