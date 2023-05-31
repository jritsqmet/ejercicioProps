import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Welcome(  {navigation}  ) {

  return (
    <View>
      <Text>Welcome</Text>
      <Button onPress={()=>{ navigation.navigate('Agenda')  }}
      title='Agenda'
      />
      
    </View>
  )
}