import { Text } from 'react-native'
import React from 'react'
import { View } from '../components'

const EducationalContentScreen = () => {
  return (
    <View isSafe style={styles.container}>
      <Text>EducationalContentScreen</Text>
    </View>
  )
}

export default EducationalContentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 12,
    },
})