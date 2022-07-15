import React, { useState } from 'react';
import { Button, Image, View, TextInput, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CreatePinScreen() {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [ratio, setRatio] = useState(1);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.cancelled) {
            setRatio(result.width / result.height)
            setImage(result.uri);
        }
    };

    const onSubmit = () => { }

    return (
        <View style={styles.root}>
            <Button title="Upload your pin" onPress={pickImage} />

            {image && (
                <>
                    <Image source={{ uri: image }} style={[styles.image, {
                        aspectRatio: ratio
                    }]} />
                    <TextInput
                        placeholder='Title...'
                        style={styles.input}
                        onChangeText={text => setTitle(text)}
                    />
                    <Button title="Submit" onPress={onSubmit} />

                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    image: {
        marginVertical: 10,
        width: "100%"
    },
    input: {
        borderWidth: 1,
        borderColor: "gainsboro",
        padding: 5,
        marginVertical: 20,
        width: "100%",
        borderRadius: 5
    }
})