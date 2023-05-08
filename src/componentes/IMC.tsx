import React, {useState} from "react";
import { Text, Button,TextInput } from "react-native";
import padrao from "../estilo/padrao";

export default (props: any) => {
    let [peso, usepeso] = useState('') 
    let [altura, usealtura] = useState('')  
    

    const pesov = Number(peso)
    const alturav = Number(altura)
    const resultado = pesov/(alturav*alturav)

    
    
    
    


    return(
        <>
            <Text>IMC: {resultado}</Text>
            <TextInput
                placeholder="Digite seu peso"
                style={padrao.input}
                value={peso}
                onChangeText={peso => usepeso(peso)}
                
            />
            <TextInput
                placeholder="Digite sua  altura"
                style={padrao.input}
                value={altura}
                onChangeText={altura => usealtura(altura)}
                
            />
            

            
        </>
    )



}
