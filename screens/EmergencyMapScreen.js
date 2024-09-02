import { Text } from 'react-native'
import React from 'react'
import { View } from '../components'

const EmergencyMapScreen = () => {
  return (
    <View isSafe style={styles.container}>
      <Text>EmergencyMapScreen</Text>
    </View>
  )
}

export default EmergencyMapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 12,
    },
})