import React, {createContext, useState, useContext, useEffect} from "react";
import { Alert } from "react-native";

const FavContent = createContext()

export default function FavProvider({children}) {

    const [favoritos, setFavoritos] = useState([])

    useEffect(()=> {
        console.log(favoritos)
    }, [favoritos])

    function Mensagem(){
        Alert.alert(
            "Planta Adicionada ao seu Jardim!",
            "",
            [
              {
                text: "Ok",
                style: "cancel",
              },
            ],
            
          );
    }

    function add(item) {
        const newFavoritos = favoritos
        newFavoritos.push(item)

        Mensagem()
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