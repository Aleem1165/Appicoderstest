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
        fontSize:fontSize.medium,
        marginTop: sizes.screenHeight * 0.02,
    },
    value: {
        fontSize: fontSize.regular,
        marginTop: sizes.screenWidth * 0.01
    },
    valueBG: {
        backgroundColor: colors.grey,
        padding: sizes.screenWidth * 0.02,
        borderRadius: sizes.screenWidth * 0.02
    }
});

export default styles