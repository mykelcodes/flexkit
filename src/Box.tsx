import { View, type ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type Props = ViewProps & {
    bg?: string;
};

export function Box({ bg, style, ...props }: Props) {
    return <View {...props} style={[styles.box, style]} />;
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 24,
        paddingHorizontal: 24,
    },
});
