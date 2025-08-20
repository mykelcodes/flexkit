import { View, type ViewProps } from 'react-native';

type Props = ViewProps & {
    bg?: string;
};

export function Box({ bg, style, ...props }: Props) {
    return (
        <View
            {...props}
            style={[{ backgroundColor: bg, flex: 1, alignItems: 'center', paddingTop: 24 }, style]}
        />
    );
}
