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
        paddingBottom: sizes.screenHeight * 0.02,
        paddingHorizontal: sizes.screenWidth * 0.01
    },
    userCard: {
        padding: sizes.screenHeight * 0.02,
        marginVertical: sizes.screenWidth * 0.01,
        backgroundColor: colors.white,
        borderRadius: sizes.screenWidth * 0.02,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 1.00,
        elevation: 1
    },
    userName: {
        fontWeight: 'bold',
        fontSize: fontSize.h6,
    },
    userEmail: {
        fontSize: fontSize.medium,
        color: colors.black,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: sizes.screenWidth * 0.85,
        backgroundColor: colors.white,
        borderRadius: sizes.screenWidth * 0.03,
        padding: sizes.screenWidth * 0.06,
    },
    modalTitle: {
        fontSize: fontSize.large,
        fontWeight: 'bold',
    },
    modalMessage: {
        fontSize: fontSize.smallM,
    },
    modalButtons: {
        marginTop: sizes.screenWidth * 0.04,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: sizes.screenWidth * 0.03
    },
    modalButton: {
        paddingVertical: sizes.screenWidth * 0.03,
        paddingHorizontal: sizes.screenWidth * 0.05,
        borderRadius: sizes.screenWidth * 0.02,
    },
    cancelButton: {
        backgroundColor: colors.grey,
    },
    logoutButton: {
        backgroundColor: colors.black,
    },
    modalButtonText: {
        color: colors.white,
        fontWeight: '500',
    },

});

export default styles
