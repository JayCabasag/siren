import { Text } from 'react-native'
import React from 'react'
import { View } from '../components'

const EmergencyAlertScreen = () => {
  return (
    <View isSafe style={styles.container}>
      <Text>EmergencyAlertScreen</Text>
    </View>
  )
}

export default EmergencyAlertScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 12,
    },
})