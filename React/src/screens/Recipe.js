import React from 'react'
import {View,Text,Image,TouchableOpacity,ImageBackground} from 'react-native'
import {Modalize} from 'react-native-modalize'
import RecipeList from '../screens/RecipeList'

export default class Recipe extends React.Component{
    render(){
        return(
            <ImageBackground
                source={require('../images/cat.png')}
                style={{width:"100%",height:"100%"}}
            >
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    paddingHorizontal:20
                }}>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate("Home")}
                        style={{
                            paddingHorizontal:10,
                            paddingVertical:13,
                            borderRadius:10,
                            marginTop:150,
                            backgroundColor:"pink"
                        }}
                    >
                        <Image
                            source={require('../images/a1.png')}
                            style={{width:20,height:15}}
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
                    alwaysOpen={500}
                    scrollViewProps={{showsVerticalScrollIndicator:false}}
                >
                    <View style={{marginTop:40}}>
                            <RecipeList
                                onPress={()=>this.props.navigation.navigate("Couscous")}
                                img={require('../images/couscous.png')}
                                title="Moroccan Couscous"
                                bg="#fdddf3"
                            />
                             <RecipeList
                                onPress={()=>this.props.navigation.navigate("RecipeDetails", {id:1})}
                                img={require('../images/tea.png')}
                                title="Tea with mint "
                                bg="#fef8e3"
                            />
                             <RecipeList
                                img={require('../images/pan.png')}
                                title="American  Pancake"
                                bg="#fdddf3"
                            />
                             <RecipeList
                                onPress={()=>this.props.navigation.navigate("Bread")}
                                img={require('../images/french.png')}
                                title="French bread "
                                bg="#fef8e3"
                            />
                             
                             

                    </View>
                </Modalize>
            </ImageBackground>
        )
    }
}