import { StyleSheet, Text, View } from 'react-native'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { Link } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import React from 'react'
import GlobalProvider from '@/context/GlobalProvider'
import TabLayout from './(tabs)/_layout'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {

    const [fontsLoaded, error] = useFonts({
        'Inter-Thin': require('../assets/fonts/Inter_28pt-Thin.ttf'),
        'Inter-SemiBold': require('../assets/fonts/Inter_28pt-SemiBold.ttf'),
        'Inter-Regular': require('../assets/fonts/Inter_28pt-Regular.ttf'),
        'Inter-Medium': require('../assets/fonts/Inter_28pt-Medium.ttf'),
        'Inter-Light': require('../assets/fonts/Inter_28pt-Light.ttf'),
        'Inter-ExtraLight': require('../assets/fonts/Inter_28pt-ExtraLight.ttf'),
    })

    useEffect(() => {
        if(error) throw error;

        if(fontsLoaded) SplashScreen.hideAsync()
    }, [fontsLoaded, error])

    if(!fontsLoaded && !error) return null

    return (
        <GlobalProvider>
    
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false}} />
            <Stack.Screen name='(auth)' options={{ headerShown: false}} />
            <Stack.Screen name='(tabs)' options={{ headerShown: false}} />
            <Stack.Screen name='(otherScreens)' options={{ headerShown: false}} />
        </Stack>
        </GlobalProvider>
    )
}

export default RootLayout
