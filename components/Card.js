import { View, Text, Image, StyleSheet, Linking, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Card(prop) {
    console.log(prop)
    const [modalVisble, setmodalVisble] = useState(false)

    function llamar(phone) {
        console.log("holaaa")
        Linking.openURL(`tel: ${phone}`)
    }
    return (
        <View>
             <Text>Agenda</Text>
            <TouchableOpacity onPress={() => setmodalVisble(true)}>
                <Image style={styles.img}
                    source={{ uri: prop.datos.picture.large }} />
                <Text> {prop.datos.name.first}  {prop.datos.name.last}</Text>
            </TouchableOpacity>
            <Modal
                visible={modalVisble}
                animationType="fade"
                transparent={true}        
            >
                <View style={styles.modal} >
                    <TouchableOpacity onPress={ ()=> llamar(prop.datos.phone) }>
                       
                        <Text>Llamar:  {prop.datos.phone} </Text>
                    </TouchableOpacity>
                    <Button onPress={ ()=> setmodalVisble(false)} title='cerrar'/>
                </View>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100
    },
    modal:{
        flex:1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',


    }
});