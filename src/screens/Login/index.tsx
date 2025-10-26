import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import styles from './style';
import SafeAreaViewBackground from '../../components/SafeAreaViewBackground';
import Button from '../../components/Button';
import images from '../../services/utilities/images';
import { colors } from '../../services/utilities';

import { useDispatch } from 'react-redux';
import { setAuthenticated } from '../../store/isAuthenticatedSlice';
import { setUserData } from '../../store/userSlice';
import useNetworkStatus from '../../hooks/useNetworkStatus';

const Login: React.FC = () => {
    const dispatch = useDispatch()
    const isOnline = useNetworkStatus();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secure, setSecure] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)

    const handleLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email){
            setError('*Please enter email address.')
            return
        }
        if (!email.trim() || !emailRegex.test(email)) {
            setError('*Please enter a valid email address.')
            return;
        }
        if(!password){
            setError('*Please enter password.')
            return
        }
        if (password.trim().length < 6) {
            setError('*Password must be at least 6 characters.')
            return;
        }
        setError(null)
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            dispatch(setAuthenticated(true))
            dispatch(setUserData({ email }))
        }, 1000);
    };

    useEffect(() => {
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [isOnline]);

    return (
        <SafeAreaViewBackground>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    {visible && <Text style={styles.isOnlineText}>
                        {isOnline ? 'Online' : 'Offline'}
                    </Text>}
                    <Text style={styles.heading}>Welcome</Text>
                    <Text style={styles.secondHeading}>Login to continue</Text>
                    <View style={styles.inputBox}>
                        <View>
                            <Text style={styles.inputLabel}>Email</Text>
                            <TextInput
                                onChangeText={text => {
                                    setEmail(text);
                                }}
                                style={styles.emailInput}
                                placeholder="Email"
                                placeholderTextColor={colors.black}
                            />
                        </View>

                        <View>
                            <Text style={styles.inputLabel}>Password</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    onChangeText={text => {
                                        setPassword(text);
                                    }}
                                    style={styles.passInput}
                                    placeholder="Password"
                                    placeholderTextColor={colors.black}
                                    secureTextEntry={secure}
                                />
                                <TouchableOpacity style={styles.imgContainer} onPress={() => {
                                    setSecure(!secure);
                                }}>
                                    <Image source={secure ? images.hide : images.show} style={styles.inputIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                         <Text style={styles.error}>{error}</Text>
                        <Button title='Login' loader={isLoading} onPress={handleLogin} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaViewBackground>
    );
};

export default Login;

