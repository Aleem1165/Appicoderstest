import React from 'react';
import {
    Text,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import { colors, fontSize, sizes } from '../../services/utilities';

interface ButtonProps {
    title: string;
    onPress?: () => void;
    loader?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    loader = false,
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {loader ? (
                <ActivityIndicator
                    size={28}
                    color={colors.white}
                />
            ) : (
                <Text style={styles.buttonTitle}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        width: sizes.screenWidth * 0.75,
        height: sizes.screenHeight * 0.05,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:sizes.screenWidth * 0.03
    },
    buttonTitle: {
        color: colors.white,
        fontSize: fontSize.medium
    }
});

export default Button;
