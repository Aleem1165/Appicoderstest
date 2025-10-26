import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services/utilities";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: sizes.screenWidth * 0.03,
    },
    label: {
        fontWeight: 'bold',
        fontSize: fontSize.medium,
        marginTop: sizes.screenHeight * 0.02,
    },
    value: {
        fontSize: fontSize.regular,
        marginTop: sizes.screenWidth * 0.01
    },
    valueBG: {
        backgroundColor: colors.white,
        padding: sizes.screenWidth * 0.02,
        borderRadius: sizes.screenWidth * 0.02,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 1.00,
        elevation: 1
    }
});

export default styles