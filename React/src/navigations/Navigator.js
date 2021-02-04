import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from '../screens/Home'
import Recipe from '../screens/Recipe'
import Couscous from '../screens/Couscous'
import Bread from '../screens/Bread'
import VPage from '../screens/VPage'
import IngredientsC from '../screens/IngredientsC'
import RecipeDetails from '../screens/RecipeDetails'

const stackNavigatorOptions={
    headerShownFalse:false
}

const AppNavigator = createStackNavigator({

    Home:{screen:Home},
    Recipe:{screen:Recipe},
    Couscous:{screen:Couscous},
    RecipeDetails:{screen:RecipeDetails},
    Bread:{screen:Bread},
    VPage:{screen:VPage},
    IngredientsC:{screen:IngredientsC}
},

{
    defaultNavigationOptions:stackNavigatorOptions
}
)

export default createAppContainer(AppNavigator);
