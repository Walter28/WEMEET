import { Link, Tabs } from 'expo-router'
import { View, Text, Image } from 'react-native'

import icons from "../../constants/icons"
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React from 'react';

interface TabIconProps {
    icon: any;
    color: any;
    name: string;
    focused: any;
  }

const TabIcon:React.FC<TabIconProps> = ( {icon, color, name, focused}) => {
    return (
        <View
            className='items-center justify-center gap-2'
        >
            <Image 
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />
            <Text className={`${focused ? 'font-isemibold' : 'font-iregular'} text-xs`} style={{ color: color}}>
                {name}
            </Text>
        </View>
    )
}

const TabLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#3E64FF',
                tabBarInactiveTintColor: '#cdcde0',
                tabBarStyle: {
                    backgroundColor: "#fff",
                    height: 70,
                    borderTopWidth: 1,
                    borderTopColor: '#f4f4f4'
                }
            }}
        >
            <Tabs.Screen
                name='home'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name='chat'
                options={{
                    title: 'Chat',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.msg}
                            color={color}
                            name="Chat"
                            focused={focused}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name='appointment'
                options={{
                    title: 'Appointment',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon={icons.appoint}
                            color={color}
                            name='Appointment'
                            focused={focused}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            name='Profile'
                            focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabLayout