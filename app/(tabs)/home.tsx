import { View, Text, TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'
import { useGlobalcontext } from '@/context/GlobalProvider'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'

import images from "@/constants/images"
import { Link, useNavigation, useRouter } from 'expo-router'
import { Entypo } from '@expo/vector-icons'

import { IconButton, MD3Colors } from 'react-native-paper';
import { ScrollView } from 'react-native'
import icons from '@/constants/icons'

const { width } = Dimensions.get('window'); // Get the screen width

const Home = () => {

    const router = useRouter();
  const navigation = useNavigation();

    const {user, setUser} = useGlobalcontext()
  return (
    <SafeAreaView className=''>
      <ScrollView className='mx-6 mt-6 h-full' showsVerticalScrollIndicator={false}>
        <View className='flex flex-row justify-between items-center'>
            <Text className='font-ilight text-md text-black'>Welcome again, {String(user['nom'])} </Text>
            <Image
            source={{ uri: 'https://cloud.appwrite.io/v1/avatars/initials?name=MUHIRE++Chris+&project=66c1ede600223bc0b62d' }}
            className='w-[50px] h-[50px] rounded-full'
            resizeMode='contain'
            />
        </View>

        <View className='w-[100%] h-[400px] items-center py-3'>
            <Image
                source={images.doctorimg}
                className='w-[100%] h-[100%] '
                resizeMode='contain'
            />
        </View>

        <View className=''>
            <TouchableOpacity 
                onPress={() => router.push({
                    pathname: '/doctor',
                    params: { spec: "all" }
                    })}
            >
                <View className='bg-[#eaeaea] flex flex-row justify-between p-4 rounded-xl'>
                    <View className='w-[50%]'>
                        <Text className='font-isemibold text-black mb-2 text-md'>Vous etes malade ?</Text>
                        <Text className='text-[#6B779A] text-xs'>Trouvez vous un specialiste a votre gout avec WEMEET</Text>
                    </View>
                    <View>
                    <IconButton
                        icon="arrow-right"
                        iconColor="#3E64FF"
                        className='rounded-lg bg-white'
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                    </View>
                </View>
            </TouchableOpacity>
        </View>

        <View className='mt-4 mb-10'>
            <View>
                <Text className='font-isemibold'>Specialité 😷</Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false} 
                className='mt-4'
                >

                <TouchableOpacity
                    onPress={() => router.push({
                        pathname: '/doctor',
                        params: { spec: "neurologue" }
                      })}
                >
                    <View className='flex mr-4 bg-[#eaeaea] w-[150px] p-4 items-center rounded-xl'>
                        <Image 
                            source={icons.brain_icon} 
                            className='w-10 h-10'
                            resizeMode='contain' 
                        />

                        <Text className='mt-2 font-isemibold text-[#6B779A]'>Neurologue</Text>

                        <Text className='font-iregular text-[#6B779A] text-xs'>5 Docteurs</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => router.push({
                        pathname: '/doctor',
                        params: { spec: "geneticien" }
                      })}
                >
                    <View className='flex mr-4 bg-[#eaeaea] w-[150px]  p-4 items-center rounded-xl'>
                        <Image 
                            source={icons.dna_icon} 
                            className='w-10 h-10'
                            resizeMode='contain' 
                        />

                        <Text className='mt-2 font-isemibold text-[#6B779A]'>Géneticien</Text>

                        <Text className='font-iregular text-[#6B779A] text-xs'>5 Docteurs</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => router.push({
                        pathname: '/doctor',
                        params: { spec: "dentiste" }
                      })}
                >
                    <View className='flex bg-[#eaeaea] w-[150px]  p-4 items-center rounded-xl'>
                        <Image 
                            source={icons.dentist_icon} 
                            className='w-10 h-10'
                            resizeMode='contain' 
                        />

                        <Text className='mt-2 font-isemibold text-[#6B779A]'>Dentiste</Text>

                        <Text className='font-iregular text-[#6B779A] text-xs'>5 Docteurs</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
            
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home