import React from 'react'
import {View,Text,Image,TouchableOpacity,ImageBackground} from 'react-native'
import {Modalize} from 'react-native-modalize'
import Titre from '../screens/Titre'

export default class Recipe extends React.Component{
    render(){
        return(
            <ImageBackground
                source={require('../images/rec.png')}
                style={{width:"100%",height:"100%"}}
            >
                <View>
               <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('VPage')}
                   style={{
                   flexDirection:"row",
                   paddingVertical:5,
                   backgroundColor:"#f58084",
                   marginHorizontal:40,
                   paddingVertical:15,
                   alignItems:"center",
                   borderRadius:10,
                   justifyContent:"center",
                   marginTop:220
               }}>
                   <Text style={{
                       color:"#FFF",
                       fontFamily:"Bold",
                       fontSize:15,
                       marginRight:120
                   }}>
                       Instructions 
                   </Text>
                   <Image source={require('../images/a1.png')}/>
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
                    <View>
                    <Titre
                            num={1}
                            color="#fde6e6"
                            title="kg de semoule"
                        />

                    <Titre
                            num={500}
                            color="#fde6e6"
                            title="g de courgettes"
                        />
                     <Titre
                            num={2}
                            color="#fde6e6"
                            title="oignons"
                        />
                     <Titre
                            num={150}
                            color="#fde6e6"
                            title="g de pois chiches"
                        />

                    <Titre
                            num={500}
                            color="#fde6e6"
                            title="g de navets"
                        />
                    <Titre
                            num={1}
                            color="#fde6e6"
                            title="kg de boeuf à braiser"
                        />
                    <Titre
                            num={1}
                            color="#fde6e6"
                            title=" kg d'épaule d'agneau"
                        />
                    <Titre
                            num={200}
                            color="#fde6e6"
                            title=" g de beurre"
                        />
                    <Titre
                            num={1}
                            color="#fde6e6"
                            title=" c. à c. de piment doux"
                        />
                    <Titre
                            num={1}
                            color="#fde6e6"
                            title=" c. à c. de safran"
                        />
                     <Titre
                            num={1}
                            color="#fde6e6"
                            title=" 1 bouquet de coriandre"
                        />
                    <Titre
                            num={1}
                            color="#fde6e6"
                            title=" Poivre "
                        />
                    <Titre
                            num={1}
                            color="#fde6e6"
                            title=" Sel / Sel Fin"
                        />
                                          
                                          

             

                    </View>
                </Modalize>
            </ImageBackground>
        )
    }
}