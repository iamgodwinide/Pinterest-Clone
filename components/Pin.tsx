import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from "react-native"
import { AntDesign } from '@expo/vector-icons';

const Pin = (props) => {
    const { title, image } = props.pin
    const [ratio, setRatio] = useState(2 / 1);

    const onLike = () => {

    }

    useEffect(() => {
        if (image) {
            Image.getSize(image, (width, height) => {
                setRatio(width / height);
            });
        }
    }, [])

    return (
        <View style={styles.pin}>
            <View>
                <Image
                    source={{ uri: image }}
                    style={[styles.image, {
                        aspectRatio: ratio
                    }]}
                />
                <Pressable
                    onPress={onLike}
                    style={styles.heartBtn}
                >
                    <AntDesign name="hearto" size={24} color="black" />
                </Pressable>
            </View>
            <Text style={
                styles.title
            }>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pin: {
        width: "100%",
        padding: 10
    },
    image: {
        width: "100%",
        borderRadius: 25
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        margin: 10
    },
    heartBtn: {
        position: "absolute",
        bottom: 10,
        right: 10,
        backgroundColor: '#D3DCD4',
        padding: 10,
        borderRadius: 50
    }
})

export default Pin