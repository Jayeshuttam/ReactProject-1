import React from 'react'
import {View,Text,Image,ImageBackground,TouchableOpacity,} from 'react-native'
import { Modalize } from 'react-native-modalize'
import Titre from './Titre'


export default function RecipeDetails({route}){
       const {id}=route.params
 return(

<View>
    <Text>HEllo {id} </Text>
</View>

 );


}