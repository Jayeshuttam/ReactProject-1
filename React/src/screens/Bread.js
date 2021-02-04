import React from 'react'
import {View,Text,Image,ImageBackground,TouchableOpacity,} from 'react-native'
import { Modalize } from 'react-native-modalize'
import Titre from './Titre'

export default class Bread extends React.Component{
    render(){
        return(
          <ImageBackground
                source={require('../images/crs.png')}
                style={{width:"100%",height:"100%"}}
          >
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    paddingHorizontal:20
                }}>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate("Recipe")}
                        style={{
                            paddingHorizontal:10,
                            paddingVertical:13,
                            borderRadius:10,
                            marginTop:10,
                            backgroundColor:"red"
                        }}
                    >
                            <Image
                                source={require('../images/a1.png')}
                                style={{height:15,width:20}}
                            />
                    </TouchableOpacity>
                    
                </View>
               
                


                <Modalize 
                    handleStyle={{
                        marginTop:30,
                        backgroundColor:"#e9e9e9",
                        width:80
                    }}
                    modalStyle={{
                        borderTopLeftRadius:60,
                        borderTopRightRadius:60
                    }}
                    alwaysOpen={510}
                    scrollViewProps={{ showsVerticalScrollIndicator:false }}
                >
                    <View style={{
                        flexDirection:"row",
                        marginHorizontal:30,
                        marginTop:40
                    }}>
                        <Image
                            source={require('../images/gordon.png')}
                            style={{
                                height:50,
                                width:50,
                                borderWidth:2,
                                borderColor:"#f58084",
                                borderRadius:50,
                            }}
                        />
                        <View style={{marginHorizontal:20}}>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:18
                            }}>Gordon Ramsay</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:12
                            }}>
                                French Chef
                            </Text>
                        </View>
                        
                    </View>
                    <View>

                        <Titre
                            num={1}
                            color="#fde6e6"
                            title="Ingredients"
                            onPress={()=>this.props.navigation.navigate('IngredientsC')}
                        />
                         <Titre
                            num={2}
                            color="#f9e1fc"
                            duration="00h:10"
                            title="Instructions"
                            onPress={()=>this.props.navigation.navigate('VPage')}
                        />
                         
                         
                    </View>

                    
                </Modalize>

          </ImageBackground>
        )
    }
}