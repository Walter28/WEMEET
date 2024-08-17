import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className='text-3xl text-yellow-700'>WEMEET</Text>
      <StatusBar style="auto"/>
    </View>
  )
}

export default App