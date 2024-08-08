import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';
import Home from "./home";
import Tasks from "./tasks";
import Pomos from "./pomos";
import About from "./about";


const Tab = createBottomTabNavigator()

export default Routes = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="home"
            component={Home}
            options={{
                tabBarShowLabel:false,
                headerShown:false,
                tabBarIcon:({focused, size, color})=>{
                    if(focused){
                        return <Ionicons size={size} name="home" color={color}/>
                    }
                    else{
                        return <Ionicons size={size} name="home-outline" color={color}/>
                    }
                }
            }}
            />

            <Tab.Screen
            name="task"
            component={Tasks}
            options={{
                tabBarShowLabel:false,
                headerShown:false,
                tabBarIcon:({focused, size, color})=>{
                    if(focused){
                        return <Ionicons size={size} name="book" color={color}/>
                    }
                    else{
                        return <Ionicons size={size} name="book-outline" color={color}/>
                    }
                }
            }}
            />

            <Tab.Screen
            name="pomos"
            component={Pomos}
            options={{
                tabBarShowLabel:false,
                headerShown:false,
                tabBarIcon:({focused, size, color})=>{
                    if(focused){
                        return <Ionicons size={size} name="stopwatch" color={color}/>
                    }
                    else{
                        return <Ionicons size={size} name="stopwatch-outline" color={color}/>
                    }
                }
            }}
            />

            <Tab.Screen
            name="about"
            component={About}
            options={{
                tabBarShowLabel:false,
                headerShown:false,
                tabBarIcon:({focused, size, color})=>{
                    if(focused){
                        return <Ionicons size={size} name="help-circle-sharp" color={color}/>
                    }
                    else{
                        return <Ionicons size={size} name="help-circle-outline" color={color}/>
                    }
                }
            }}
            />
        </Tab.Navigator>
    )
}
