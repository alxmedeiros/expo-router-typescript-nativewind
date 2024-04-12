import { View, Text } from 'react-native'

import { name, version } from '../../package.json'

export default function Home() {
  return (
    <View className="items-center justify-center flex-1">
      <Text>{`${name}:${version}`}</Text>
    </View>
  )
}