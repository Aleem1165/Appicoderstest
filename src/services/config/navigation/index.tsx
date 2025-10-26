import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import Login from '../../../screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../../screens/Home';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../../store/isAuthenticatedSlice';
import UserDetails from '../../../screens/UserDetails';
import { User } from '../../../types/User.types';

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    UserDetails: { user: User };
}

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator: React.FC = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated)

    return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
}


const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS,
            }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="UserDetails" component={UserDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const AuthNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS,
            }}>
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;