import { View, Text } from 'react-native'
import React from 'react'
import TabLayout from '../(tabs)/_layout'
import { Stack } from 'expo-router'

const OtherScreensLayout = () => {
  return (
    <>
    {/* <TabLayout /> */}
    <Stack>
        
        {/* <Stack.Screen name='(auth)' options={{ headerShown: false}} /> */}
        <Stack.Screen name='doctor' options={{ headerShown: false}} />
        </Stack>
    </>
  )
}

export default OtherScreensLayout