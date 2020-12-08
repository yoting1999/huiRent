import React, { useRef } from 'react';
import { Animated, Text, View, StyleSheet, Button,Easing } from 'react-native';

function Lottery(props) {
    const fadeAnim = useRef(new Animated.Value(0.5)).current;

    const spinValue = new Animated.Value(0);

    const circle_start = () => {
    Animated.loop( Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration:1000,
                easing: Easing.linear, // Easing is an additional import from react-native
                useNativeDriver: true  // To make use of native driver for performance
            }
        )).start()

        // Next, interpolate beginning and end values (in this case 0 and 1)
    }
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
  

    return (
        <View style={styles.container}>
            <Animated.Image
             style={{transform: [{rotate:spin}] }}
             source={require('./imgs/circle_bg.png')} />
<View style={styles.buttonRow}>
                <Button title='點我開始抽獎' onPress={circle_start}></Button>
    
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: 'powderblue',
    },
    fadingText: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        marginVertical: 16,
    },
});

export default Lottery;