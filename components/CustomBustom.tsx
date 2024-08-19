import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { isLoading } from 'expo-font'

interface ButtonPropsTypes {
    title: any,
    handlePress: any,
    containerStyles: any,
    textStyles: any,
    isLoading: any
}

const Button:React.FC<ButtonPropsTypes> = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`rounded-xl min-h-[50px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ""} `}
    >
        <Text className='text-white font-iregular'>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button