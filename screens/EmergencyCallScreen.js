import { Text } from 'react-native'
import React from 'react'
import { View } from '../components'

const EmergencyCallScreen = () => {
  return (
    <View isSafe style={styles.container}>
      <Text>EmergencyCallScreen</Text>
    </View>
  )
}

export default EmergencyCallScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 12,
    },
})