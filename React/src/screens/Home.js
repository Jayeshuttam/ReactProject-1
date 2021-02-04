import React from 'react'
import {View,Text,ImageBackground,TouchableOpacity,Image} from 'react-native'
import {ScrollView,TextInput} from 'react-native-gesture-handler'


export default class Home extends React.Component{

    render(){
        return(
            <ImageBackground
            source={require('../images/21.jpg')}
            style={{width:"100%",height:"90%"}}
           >
                <ScrollView>
                   <View style={{
                       width:"100%",
                       alignItems:"flex-end",
                       paddingHorizontal:20
                   }}>
                       
                          
                       </View>
                       <Text style={{
                       paddingHorizontal:30,
                       marginTop:100,
                       fontSize:30,
                       paddingTop:230,
                       fontFamily:"Bold",
                       color:"#FFF"
                   }}>
                       Let's Cook together 
                   </Text>
                   
                    <View style={{
                       flexDirection:"row",
                       backgroundColor:"#FFF2F2",
                       marginTop:200,
                       marginHorizontal:10,
                       borderRadius:100,
                       paddingVertical:30,
                       paddingLeft:30
                   }}>
                       <View>
                           
                           <TouchableOpacity
                                onPress={()=>this.props.navigation.navigate('Recipe')}
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#C81B1B",
                                    alignItems:"center",
                                    marginTop:50,
                                    width:150,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"#FFF",
                                        fontFamily:"Bold",
                                        fontSize:12
                                    }}>Recipes</Text>  
                                    <Image
                                        source={require('../images/a3.png')}
                                        style={{marginLeft:20,width:8,height:8}}
                                    />
                           </TouchableOpacity>
                       </View>
                       <Image
                            source={require('../images/undraw.png')}
                            style={{marginLeft:1,marginTop:15,resizeMode:'contain',height:100}}
                       />

                   </View>
                   
                
               </ScrollView>



               
           </ImageBackground> 
        )
    }
}