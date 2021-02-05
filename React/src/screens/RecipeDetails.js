import React from 'react'
import { render } from 'react-dom'
import {View,Text,Image,ImageBackground,TouchableOpacity,} from 'react-native'
import { Modalize } from 'react-native-modalize'
import Titre from './Titre'
import {recipesData} from '../data/recipes'


export default class Recipe extends React.Component{
    
    render() {
        console.log(recipesData)

        const {id} = this.props.navigation.state.params
        const recipe = recipesData[id]
        return(
            <View>
                <Text>{recipe.name}</Text>
            </View>
            );
    }

}