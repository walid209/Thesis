import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StripeProvider } from "@stripe/stripe-react-native";
import { Provider } from './Component/Auth.jsx';
import OnBording from './Screens/OnBordingScreen/OnBording.jsx';
import Role from './Screens/OnBordingScreen/Role.jsx';
import Login from './Screens/Registration/Login.jsx';
import TopTabNav from './Screens/Navigation/TopTabNav.jsx';
import BottomNavigation from './Screens/Navigation/BottomNavigation.jsx';
import LogInUser from './Screens/Registration/ClientLogIn.jsx';
import TopNav from './Screens/Navigation/TopNav.jsx';
import SignUp from './Screens/Registration/SignUp.jsx';
import Search from './Screens/Search/Search.jsx';
import Chat from './Screens/Chat/Chat.jsx';
import Profile from './Screens/Profile/Profile.jsx';
import Chats from './Screens/Chat/Chats.jsx';
import HomePage from './Screens/HomePage/HomePage.jsx';
import AllChats from './Screens/Chat/AllChats.jsx';
import EditProfile from './Screens/Profile/EditProfile.jsx';
import Subscribe from './Screens/Subscribe/Subscribe.jsx';
import ProductDetails from './Screens/PropertyDetails/ProductDetails.jsx'; 
import AllPropertiesPage from './Screens/HomePage/AllPropertiesPage.jsx';  
import FilteredProperties from './Screens/HomePage/FilteredProperties.jsx';
import Bottomsheet from './Component/Bottomsheet.jsx';
import Calender from './Screens/PropertyDetails/Calender.jsx'
import add from "./Screens/Owner/Add.jsx"
import Photo from './Screens/Owner/ImgPicker.jsx';
import EditProfilee from './Screens/Owner/EditProfilee';
import Profilee from './Screens/Owner/Profilee';
import ProductsDetails from './Screens/Owner/ProductsDetails.jsx'; 
import ExtraFeatures from './Screens/Owner/ExtraFeatures.jsx';
import OwnerBottomNavigation from './Screens/Owner/OwnerBottomNavigation.jsx';
import OwnerHomePage from './Screens/Owner/OwnerHomePage.jsx';
import OwnerAllChats from './Screens/Owner/OwnerAllChats.jsx';
import OwnerChat from './Screens/Owner/OwnerChat.jsx';


const Stack = createStackNavigator();

export default function App() {
  return (
    <StripeProvider publishableKey="pk_test_51O7xr1FBTzNlZioJG5eArUt9FVglGo9PSPmDI5EU7STowGqZPxZbI8FOkfGhlqX6CGiYILjvtYntdB0CtMiD7k4g00pipm25C1">
    <Provider>
      <NavigationContainer>
        <Stack.Navigator >
      
           <Stack.Screen name="OnBording" component={OnBording} options={{ headerShown: false }}/>
          <Stack.Screen name="Role" component={Role} options={{ headerShown: false }} />
          <Stack.Screen name="TopTabNav" component={TopTabNav} options={{ headerShown: false }}/>
          <Stack.Screen name="TopNav" component={TopNav} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={Login} />  
          <Stack.Screen name="SignUp" component={SignUp} /> 
          <Stack.Screen name="LogIn" component={LogInUser} />  
          <Stack.Screen name="ProductDetails" component={ProductDetails}  />
          <Stack.Screen name="Navigation" component={BottomNavigation} options={{ headerShown: false }}/>
          <Stack.Screen name="OwnerNav" component={OwnerBottomNavigation} options={{ headerShown: false }}/>
          <Stack.Screen name="Subscribe" component={Subscribe} />  
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="FilteredProperties" component={FilteredProperties} />
          <Stack.Screen name="Calender" component={Calender} />
          <Stack.Screen name="AllProperties" component={AllPropertiesPage} options={{ title: 'All Properties' }} />
          <Stack.Screen name="Search" component={Search} />  
          <Stack.Screen name="FiltredProperties" component={FilteredProperties} />  
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} /> 
          <Stack.Screen name="Chat" component={Chat} /> 
          <Stack.Screen name="AllChat" component={AllChats} />  
           <Stack.Screen name="Chats" component={Chats} /> 
           <Stack.Screen name="bottom" component={Bottomsheet} />  
           <Stack.Screen name="Profilee" component={Profilee} />  
           <Stack.Screen name="OwnerHomePage" component={OwnerHomePage} />  
           <Stack.Screen name="EditProfilee" component={EditProfilee}  /> 
          <Stack.Screen name="add" component={add} options={{ headerShown: false }}/>
          <Stack.Screen name="Extra" component={ExtraFeatures} />
          <Stack.Screen name="img" component={Photo} options={{ headerShown: false }}  /> 
           <Stack.Screen name="ProductsDetails" component={ProductsDetails}   />
           <Stack.Screen name="OwnerAllChats" component={OwnerAllChats}   />
           <Stack.Screen name="OwnerChat" component={OwnerChat}   />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
