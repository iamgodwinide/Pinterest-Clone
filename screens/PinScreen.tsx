import { Image, SafeAreaView, StyleSheet, Text, View, StatusBar as NativeStatusBar, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import pins from '../assets/data/pins'
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';


const PinScreen = () => {
    const [ratio, setRatio] = useState();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const route = useRoute();

    const { id } = route.params;

    const pin = pins.find(p => p.id === id);

    const goBack = () => {
        navigation.goBack()
    }

    useEffect(() => {
        if (pin?.image) {
            Image.getSize(pin.image, (width, height) => {
                setRatio(width / height);
            });
        }
    }, [])
    return (
        <SafeAreaView style={{ backgroundColor: "black" }}>
            <StatusBar style='light' backgroundColor='black' />
            <View
                style={[styles.root, { marginTop: NativeStatusBar.currentHeight }]}
            >
                <Image
                    source={{ uri: pin?.image }}
                    style={[styles.image, { aspectRatio: ratio }]}
                />
                <Text style={styles.title}>{pin?.title}</Text>

                <Pressable
                    style={[styles.backBtn, {
                        top: insets.top
                    }]}
                    onPress={goBack}
                >
                    <Ionicons name='chevron-back' size={35} color="#fff" />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default PinScreen

const styles = StyleSheet.create({
    root: {
        height: "100%",
        backgroundColor: "#fff",
        borderTopEndRadius: 50,
        borderTopLeftRadius: 50,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    title: {
        margin: 10,
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center",
        lineHeight: 35
    },
    backBtn: {
        position: "absolute",
        left: 10
    }
})