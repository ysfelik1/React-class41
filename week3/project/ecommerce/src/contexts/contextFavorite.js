import React, { createContext, useState,useContext} from "react";


const contextFavorites = createContext(null);

export function useFavorites(){
    return useContext(contextFavorites)
}


export const FavoritesProvider =({children})=>{
    const [favorites, setFavorites] = useState([]);

    const value={setFavorites,favorites}
    return <contextFavorites.Provider value={value}> {children} </contextFavorites.Provider>
}
