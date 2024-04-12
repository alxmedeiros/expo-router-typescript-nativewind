import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Slot } from 'expo-router'

import "@/styles/global.css"

export default function Layout() {
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <Slot />
    </View>
  )
}
