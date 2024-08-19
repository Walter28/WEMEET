import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { IconButton } from 'react-native-paper'
import { router } from 'expo-router'

const Profile = () => {
  return (
    <SafeAreaView className=''>
      <ScrollView className='mx-6 mt-6 h-full' showsVerticalScrollIndicator={false}>
        <View>

          <View className='flex flex-row justify-between items-center '>
                <IconButton
                    icon="arrow-left"
                    iconColor="#3E64FF"
                    size={25}
                    onPress={() => router.back()}
                />

                {/* <Text className='font-isemibold text-[#222B45] font-bold text-lg'> Docteurs </Text> */}

                <IconButton
                    icon="dots-vertical"
                    iconColor="#3E64FF"
                    size={25}
                    onPress={() => router.back()}
                />
            </View>

            <View className=''>

              

            </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile