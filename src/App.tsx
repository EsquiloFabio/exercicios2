import React, {Component} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import IMC from "./componentes/IMC";

export default class app extends Component{


  render() {

    
    return (
      <View style = {estilos.container}>
        <IMC/>
        

      </View>
    );
    
  };
  
};

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  fonte: {
    fontSize: 50,
  },
});

