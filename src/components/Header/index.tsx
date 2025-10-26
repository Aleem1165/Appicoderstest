import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import { colors, fontSize, sizes } from '../../services/utilities';
import images from '../../services/utilities/images';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from '../../store/isAuthenticatedSlice';
import { removeUserData } from '../../store/userSlice';

interface HeaderProps {
    title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(setAuthenticated(false))
        dispatch(removeUserData())
    }

    return (
        <View style={styles.container}>
            <Text style={styles.buttonTitle}>{title}</Text>
            <TouchableOpacity onPress={handleLogout}>
                <Image style={styles.logoutIcon} source={images.logoutIcon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.hwite,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: sizes.screenWidth * 0.02
    },
    buttonTitle: {
        color: colors.black,
        fontSize: fontSize.extraLarge,
        fontWeight: '500'
    },
    logoutIcon: {
        width: 25,
        height: 35,
        resizeMode: 'contain'
    }
});

export default Header;
