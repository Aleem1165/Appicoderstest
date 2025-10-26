import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, ActivityIndicator, FlatList } from 'react-native';
import SafeAreaViewBackground from '../../components/SafeAreaViewBackground';
import styles from './style';
import Header from '../../components/Header';
import { handleGetAllUsers } from '../../services/config/Api';
import { colors } from '../../services/utilities';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../services/config/navigation';
import { useNavigation } from '@react-navigation/native';
import { User } from '../../types/User.types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const [users, setUsers] = useState<User[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [refreshing, setRefreshing] = useState<boolean>(false);

    const getUsers = async () => {
        if (!refreshing) setIsLoading(true);
        try {
            const response = await handleGetAllUsers()
            if (response.status == 200) {
                setUsers(response.data)
            } else {
                Alert.alert(
                    'Error',
                    'Failed to fetch users. Please try again later.',
                    [{ text: 'OK' }]
                );
                console.log("Error fetching users:", response);
            }
        } catch (error) {
            Alert.alert(
                'Error',
                'Failed to fetch users. Please try again later.',
                [{ text: 'OK' }]
            );
            console.log("Error fetching users:", error);
        } finally {
            setIsLoading(false)
            setRefreshing(false);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        getUsers();
    };

    const renderUser = ({ item }: { item: User }) => (
        <TouchableOpacity style={styles.userCard}
            onPress={() => navigation.navigate('UserDetails', { user: item })}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.userEmail}>{item.email}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaViewBackground>
            <View style={styles.container}>
                <Header title='Home' />
                {isLoading && users.length === 0 ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color={colors.black} />
                    </View>
                ) : (
                    <FlatList
                        data={users}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderUser}
                        contentContainerStyle={styles.flatListStyle}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                )}
            </View>
        </SafeAreaViewBackground>
    );
};

export default Home;

