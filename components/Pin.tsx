import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Pin = (props) => {
    const { title, image, id } = props.pin
    const [ratio, setRatio] = useState(2 / 1);
    const navigation = useNavigation();


    useEffect(() => {
        if (image) {
            Image.getSize(image, (width, height) => {
                setRatio(width / height);
            });
        }
    }, []);


    const onLike = () => {

    }

    const goToPinPage = () => {
        navigation.navigate("Pin", { id });
    }

    return (
        <Pressable
            onPress={goToPinPage}
            style={styles.pin}>
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
                    <AntDesign name="hearto" size={16} color="black" />
                </Pressable>
            </View>
            <Text
                numberOfLines={2}
                style={styles.title}>{title}</Text>
        </Pressable>
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
        fontWeight: "600",
        lineHeight: 22,
        margin: 5,
        color: "#000"
    },
    heartBtn: {
        position: "absolute",
        bottom: 10,
        right: 10,
        backgroundColor: '#D3DCD4',
        padding: 7,
        borderRadius: 50
    }
})

export default Pin