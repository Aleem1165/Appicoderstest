import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../services/config/navigation';
import SafeAreaViewBackground from '../../components/SafeAreaViewBackground';
import Header from '../../components/Header';
import styles from './style';

type UserDetailsRouteProp = RouteProp<RootStackParamList, 'UserDetails'>;

const UserDetails: React.FC = () => {
    const route = useRoute<UserDetailsRouteProp>();
    const { user } = route.params;

    return (
        <SafeAreaViewBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <Header title='User Details' />
                <Text style={styles.label}>Name:</Text>
                <Text style={[styles.value, styles.valueBG]}>{user.name}</Text>

                <Text style={styles.label}>Username:</Text>
                <Text style={[styles.value, styles.valueBG]}>{user.username}</Text>

                <Text style={styles.label}>Email:</Text>
                <Text style={[styles.value, styles.valueBG]}>{user.email}</Text>

                <Text style={styles.label}>Phone:</Text>
                <Text style={[styles.value, styles.valueBG]}>{user.phone}</Text>

                <Text style={styles.label}>Website:</Text>
                <Text style={[styles.value, styles.valueBG]}>{user.website}</Text>

                <Text style={styles.label}>Company:</Text>
                <View style={styles.valueBG}>
                    <Text style={styles.value}>{user.company?.name}</Text>
                    <Text style={styles.value}>{user.company?.catchPhrase}</Text>
                    <Text style={styles.value}>{user.company?.bs}</Text>
                </View>

                <Text style={styles.label}>Address:</Text>
                <View style={styles.valueBG}>
                    <Text style={styles.value}>
                        {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                    </Text>
                    <Text style={styles.value}>
                        Geo: {user.address.geo.lat}, {user.address.geo.lng}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaViewBackground>
    );
};

export default UserDetails;
