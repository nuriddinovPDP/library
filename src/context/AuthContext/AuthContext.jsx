import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAutenticated, setIsAutenticated] = useState(
        JSON.parse(localStorage.getItem("isAutenticated")) || false
    );

    useEffect(() => {
        localStorage.setItem("isAutenticated", JSON.stringify(isAutenticated));
    }, [isAutenticated]);

    return (
        <AuthContext.Provider value={{ isAutenticated, setIsAutenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
