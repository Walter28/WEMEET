import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link, Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';

import images from '../constants/images'
import Button from '@/components/CustomBustom';
import React from 'react';

import 'react-native-url-polyfill/auto'
import { useGlobalcontext } from '@/context/GlobalProvider';

const App = () => {

    const {isLoading, isLoggedIn} = useGlobalcontext()

    if(!isLoading && isLoggedIn) return <Redirect href="/home" />

  return (
    <SafeAreaView className='bg-customDarkBlue h-full'>
    {/* <LinearGradient colors={['#0172B2', '#001645']}
    className='h-full justify-center items-center'
    start={{x: 0, y: 0}}
    end={{x: 0, y: 1}} > */}
        <ScrollView contentContainerStyle={{ height: '100%'}}>
            <View className='w-full justify-center items-center h-full px-9'>
                <Image
                    source={images.wemeetlogo}
                    className='w-[170px] h-[84px]'
                    resizeMode='contain'
                />

                <Text className='text-white font-iregular text-center'>
                    Fixé un rendez-vous avec un specialiste en un clic
                </Text>

                <Button 
                      title="Get Started"
                      handlePress={() => router.push('/sign-in')}
                      containerStyles="w-full mt-10 outline-3 border border-white" textStyles={undefined} isLoading={undefined}                />
            </View>
        </ScrollView>

        <StatusBar backgroundColor='rgb(0, 22, 69)' style='auto' />
    {/* </LinearGradient> */}
    </SafeAreaView>
  )
}

export default App