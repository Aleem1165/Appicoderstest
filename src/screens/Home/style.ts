import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services/utilities";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: sizes.screenWidth * 0.03
    },
    loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    flatListStyle: {
        paddingBottom: sizes.screenHeight * 0.02
    },
    userCard: {
        padding: sizes.screenHeight * 0.02,
        marginVertical: sizes.screenWidth * 0.01,
        backgroundColor: colors.grey,
        borderRadius: sizes.screenWidth * 0.02,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: fontSize.h6,
    },
    userEmail: {
        fontSize: fontSize.medium,
        color: colors.black,
    },
});

export default styles
