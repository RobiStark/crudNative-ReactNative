import Icon from 'react-native-vector-icons/FontAwesome5'
import React from 'react';
import {Button} from 'react-native-paper';

const BarraSuperior = ({navigation, route}) => {

    const handlePress = () => {
        navigation.navigate("NuevoCliente")
    }
    return(
        <>
        <Icon.Button name='plus-circle' color="#FFF" onPress= {() => handlePress()}>
            Cliente
        </Icon.Button>
        
        </>
    )
}

export default BarraSuperior;