import React from 'react'
import {View,StyleSheet,Image,StatusBar,TouchableOpacity,Dimensions, Text} from 'react-native'
import { Video } from 'expo-av'
import Titre from './Titre'


const {width, height} = Dimensions.get("window");


export default class VPage extends React.Component{
    render(){
        return(
           <View style={style.container}>
               <StatusBar backgroundColor="#f58084"/>
               <Video
                source={require('../videos/maintro.mp4')}
                rate={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={false}
                isLooping={false}
                useNativeControls
                style={style.video}
               />
               <Titre
                    color="#fde6e6"
                    title="Instructions"
                    num={1}
               />

               <Text style={{
                   fontFamily:"Medium",
                   textAlign:"justify",
                   marginTop:150,
                   color:"#345c74",
                   paddingLeft:42,
                   paddingRight:35
               }}>
                  You can check the Ingredients Here :
               </Text>
               <View>
               <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('IngredientsC')}
                   style={{
                   flexDirection:"row",
                   paddingVertical:5,
                   backgroundColor:"#f58084",
                   marginHorizontal:40,
                   paddingVertical:15,
                   alignItems:"center",
                   borderRadius:10,
                   justifyContent:"center",
                   marginTop:20
               }}>
                   <Text style={{
                       color:"#FFF",
                       fontFamily:"Bold",
                       fontSize:15,
                       marginRight:120
                   }}>
                       Ingredients 
                   </Text>
                   <Image source={require('../images/a3.png')}/>
                   </TouchableOpacity>
               </View>
           </View>
        )
    }
}
const style = StyleSheet.create({
    video:{
        width:width,
        height:height/2
    },
    container:{
        backgroundColor:"#fff",
        justifyContent:"center"
    }
})