import { Text } from 'react-native'
import React from 'react'
import { View } from '../components'

export default function ContactScreen() {
  return (
    <View isSafe style={styles.container}>
      <Text>ContactScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 12,
    },
})