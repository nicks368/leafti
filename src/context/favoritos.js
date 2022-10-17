import React, {createContext, useState, useContext, useEffect} from "react";

const FavContent = createContext()

export default function FavProvider({children}) {

    const [favoritos, setFavoritos] = useState([])

    useEffect(()=> {
        console.log(favoritos)
    }, [favoritos])

    function add(item) {
        const newFavoritos = favoritos
        newFavoritos.push(item)

        setFavoritos([...newFavoritos])
    }

    const store = {
        add,
        favoritos,
    }

    return(
        <FavContent.Provider value={store}>
            {children}
        </FavContent.Provider>
    );

}

export function useFavoritos() {
    const context = useContext(FavContent)

    const {
        favoritos,
        add
    } = context

    return{
        favoritos,
        add 
    }
}