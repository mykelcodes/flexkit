import { Text } from 'react-native';
import { Box } from '@mykelcodes/flexkit';

export default function Index() {
    return (
        <Box alignItems="center" margin="spacing.md" justifyContent="center" alignSelf="flex-start">
            <Text style={{ fontSize: 16, fontWeight: '600' }}>
                Edit app/index.tsx to edit this screen.
            </Text>
        </Box>
    );
}
