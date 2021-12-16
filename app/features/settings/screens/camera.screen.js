import React, { useState, useEffect, useRef, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Camera } from 'expo-camera';

import { theme } from '../../../infrastructure/theme';
import AppText from '../../../components/AppText';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

export default function CameraScreen({ navigation }) {

    const [hasPermission, setHasPermission] = useState(null);
    const cameraRef = useRef()
    const { user } = useContext(AuthenticationContext)

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <AppText>No access to camera</AppText>;
    }

    const snap = async () => {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync()
            await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri)
            navigation.goBack()
        }
    }

    return (
        <TouchableOpacity onPress={snap}>
            <Camera ref={(camera) => { cameraRef.current = camera }} style={styles.camera} type={Camera.Constants.Type.front}></Camera>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    camera: {
        width: '100%',
        height: '100%'
    },
})
