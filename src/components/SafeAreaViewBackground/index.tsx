import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
    children?: React.ReactNode;
}

const SafeAreaViewBackground: React.FC<Props> = ({ children }) => {

    return (
        <SafeAreaView
            style={[styles.safeAreaContent]}
            edges={Platform.OS == 'ios' ? ['top'] : ['top']}
        >
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaContent: {
        flex: 1,
    },
});

export default SafeAreaViewBackground;
