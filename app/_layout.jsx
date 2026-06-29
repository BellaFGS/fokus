import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Background } from '@react-navigation/elements';

export default function Layout() {
    return (
        // < Stack >
        //     <Stack.Screen 
        //         name='pomodoro' 
        //         options={{ headerShown: false }} 
        //     />
        // </Stack>
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#021123'
                    },
                    headerTintColor: '#fff',
                    drawerStyle: {
                        backgroundColor: '#021123'
                    },
                    drawerLabelStyle: {
                        color: '#fff'
                    }
                }}
            >    
            <Drawer.Screen
                name='add-task/index'
                options={{
                    headerShown: false
                }}
            />
            </Drawer>
        </GestureHandlerRootView>
    )
}
