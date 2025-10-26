import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services/utilities";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: sizes.screenWidth * 0.03
    },
    heading: {
        fontSize: fontSize.h3,
        fontWeight: 'bold',
        marginTop: sizes.screenHeight * 0.15
    },
    secondHeading: {
        fontSize: fontSize.large
    },
    inputBox: {
        backgroundColor: 'white',
        width: sizes.screenWidth * 0.9,
        alignSelf: 'center',
        alignItems: 'center',
        padding: sizes.screenWidth * 0.04,
        gap: sizes.screenWidth * 0.04,
        borderRadius: sizes.screenWidth * 0.03,
        marginTop: sizes.screenHeight * 0.05,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 1.00,
        elevation: 1
    },
    emailInput: {
        width: sizes.screenWidth * 0.76,
        backgroundColor: colors.white,
        borderRadius: sizes.screenWidth * 0.03,
        paddingLeft: sizes.screenWidth * 0.02,
        borderColor: colors.black,
        borderWidth: 1,
        color: colors.black
    },
    inputContainer: {
        width: sizes.screenWidth * 0.76,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: sizes.screenWidth * 0.03,
        borderColor: colors.black,
        borderWidth: 1,
    },
    passInput: {
        backgroundColor: 'transparent',
        width: sizes.screenWidth * 0.67,
        paddingLeft: sizes.screenWidth * 0.02,
        borderRadius: sizes.screenWidth * 0.03,
        color: colors.black
    },
    inputIcon: {
        height: 16,
        width: 16,
        resizeMode: 'contain',
    },
    imgContainer: {
        padding: 5
    },
    inputLabel: {
        width: sizes.screenWidth * 0.76,
    },
    isOnlineText: {
        textAlign: 'center',
        position: 'absolute',
        width: sizes.screenWidth,
        paddingVertical: 2
    },
    error: {
        width: sizes.screenWidth * 0.76,
        fontSize: fontSize.smallM,
        color: colors.error,
        fontWeight: '500'
    }
});

export default styles
