import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { View } from '../components'
import { Colors } from '../config'

const CommunitySupportScreen = () => {
  return (
    <View isSafe style={styles.container}>
      <Text>CommunictySupportScreen</Text>
    </View>
  )
}

export default CommunitySupportScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 12,
    },
})