import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

export default function Agenda() {

  const [lista, setlista] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5&exc=registered&exc=location&exc=id")
      .then(response => response.json())
      .then(data => setlista(data.results))

  }, [])


  return (
    <View>
     
      <FlatList
        data={lista}
        renderItem={({ item }) =>
          <Card datos={item} />
        }
      />
    </View>
  )
}