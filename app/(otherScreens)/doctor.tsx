import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useRouter, useLocalSearchParams, Stack   } from 'expo-router';
import { Center, Icon, Input, NativeBaseProvider } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';
import { Image } from 'react-native';

const Doctor = () => {

const { spec, setSpec} = useLocalSearchParams();
    
  return (
    <SafeAreaView className='mt-4'>
        <View>


            <View className='flex flex-row justify-between items-center '>
                <IconButton
                    icon="arrow-left"
                    iconColor="#3E64FF"
                    size={25}
                    onPress={() => router.back()}
                />

                <Text className='font-isemibold text-[#222B45] font-bold text-lg'> Docteurs </Text>

                <IconButton
                    icon="filter"
                    iconColor="#3E64FF"
                    size={25}
                    onPress={() => router.back()}
                />
            </View>

            <View className='items-center mt-3'>
                <Input 
                    w={{base: "85%",md: "25%"}}
                    h={{base: "45px"}}
                    borderRadius="15px"
                    InputLeftElement={
                        <IconButton
                            icon="magnify"
                            iconColor="#3E64FF"
                            size={25}
                        onPress={() => console.log('Pressed')}
                        />
                    }
                    placeholder="Chercher un spécialiste ..."
                />
            </View>

            <ScrollView className='mx-6 mt-6 h-full' showsVerticalScrollIndicator={false}>

                <View className='flex flex-row gap-5 justify-center' >

                        <View className='flex w-[140px] rounded-xl p-2 flex-col justify-center items-center gap-2 bg-slate-50'>
                            <View className='border-2 rounded-full border-customBlue p-1'>
                            <Image
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-b9uAApa7viu2m8V2QDPRRVkwUcK5VnNcAuYA_YZcuCHryXKVNj4N-yH_RpwGpZ7yBc&usqp=CAU' }}
                                className='w-[80px] h-[80px] rounded-full'
                                resizeMode='contain'
                            />
                            </View>
                            
                            <Text className='font-isemibold font-bold text-black text-mf'>Dr. Bellamy N</Text>

                            <Text className='font-ilight text-customBlue text-xs'>Dentist</Text>

                            {/* <View className='flex flex-row justify-center items-center'>
                                <IconButton
                                        icon="star"
                                        iconColor="#F39237"
                                        size={15}
                                        onPress={() => console.log('Pressed')}
                                />
                                <Text>
                                    135 review
                                </Text>
                            </View> */}
                        </View>

                        <View className='flex w-[140px] rounded-xl p-2 flex-col justify-center items-center gap-2 bg-slate-50'>
                            
                                <View className='border-2 rounded-full border-customBlue p-1'>
                                    <Image
                                    source={{ uri: 'data:image/jpeg;base64,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' }}
                                    className='w-[80px] h-[80px] rounded-full'
                                    resizeMode='contain'
                                    />
                                </View>
                            
                            <Text className='font-isemibold font-bold text-black text-mf'>Dr. Walter O.</Text>

                            <Text className='font-ilight text-customBlue text-xs'>Neurologue</Text>

                            {/* <Text>
                                <IconButton
                                    icon="star"
                                    iconColor="#F39237"
                                    size={15}
                                    onPress={() => console.log('Pressed')}
                                />
                                135 review
                            </Text> */}
                        </View>
                </View>

            </ScrollView>
            

        </View>
    </SafeAreaView>
  )
}

export default () => {
    return (
      <NativeBaseProvider>
        {/* <Center flex={1} px="3"> */}
            <Doctor />
        {/* </Center> */}
      </NativeBaseProvider>
    );
};