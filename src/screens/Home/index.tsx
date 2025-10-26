import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, ActivityIndicator, FlatList, Modal, Pressable } from 'react-native';
import SafeAreaViewBackground from '../../components/SafeAreaViewBackground';
import styles from './style';
import Header from '../../components/Header';
import { handleGetAllUsers } from '../../services/config/Api';
import { colors } from '../../services/utilities';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../services/config/navigation';
import { useNavigation } from '@react-navigation/native';
import { User } from '../../types/User.types';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from '../../store/isAuthenticatedSlice';
import { removeUserData } from '../../store/userSlice';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const dispatch = useDispatch()

    const [users, setUsers] = useState<User[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [isLogoutModalVisible, setIsLogoutModalVisible] = useState<boolean>(false);

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

    const handleLogout = () => {
        setIsLogoutModalVisible(false);
        dispatch(setAuthenticated(false))
        dispatch(removeUserData())
    }

    return (
        <SafeAreaViewBackground>
            <View style={styles.container}>
                <Header title='Home' onLogoutPress={() => setIsLogoutModalVisible(true)} showLogout />
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
            <Modal
                animationType="fade"
                transparent={true}
                visible={isLogoutModalVisible}
                onRequestClose={() => setIsLogoutModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Confirm Logout</Text>
                        <Text style={styles.modalMessage}>Are you sure you want to logout?</Text>

                        <View style={styles.modalButtons}>
                            <Pressable
                                style={[styles.modalButton, styles.cancelButton]}
                                onPress={() => setIsLogoutModalVisible(false)}
                            >
                                <Text style={styles.modalButtonText}>Cancel</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.modalButton, styles.logoutButton]}
                                onPress={handleLogout}
                            >
                                <Text style={styles.modalButtonText}>Logout</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaViewBackground>
    );
};

export default Home;

