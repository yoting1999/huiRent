import { Animated, Easing, View, TouchableOpacity, Image, StyleSheet, Dimensions, Text, Alert } from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import * as firebase from 'firebase'
import agent from '../../lib/agent'
import { setAuthInfo } from '../../store/actions/auth'
import { GiftOption } from "../../constants/gift";
function circle(props) {

    const { changePeople } = props

    const [drawData, setdrawData] = useState([
        { id: 1, title: "未中獎", icon: require('./imgs/cry_coin.png') },
        { id: 2, title: "頭獎", icon: require('../../../assets/Gift_elixir.jpg') },
        { id: 3, title: "未中獎", icon: require('./imgs/cry_coin.png') },
        { id: 4, title: "三獎", icon: require('../../../assets/Gift_pick.jpg') },
        { id: 5, title: "未中獎", icon: require('./imgs/cry_coin.png') },
        { id: 6, title: "二獎", icon: require('./imgs/gold_coin.png') },
        { id: 7, title: "未中獎", icon: require('./imgs/cry_coin.png') },
        { id: 8, title: "三獎", icon: require('../../../assets/Gift_pick.jpg') }
    ])
    const { People } = agent
    const userInfo = useSelector(state => state.authReducer.userInfo)

    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)
    const [offOn, setoffOn] = useState(true)
    const [rotateDeg, setrotateDeg] = useState(new Animated.Value(0))
    const confirm = () => {
        const allPoint = userInfo.AllPoint
        if (allPoint < 30) {
            Alert.alert(
                '點數不足',
                '請返回',
                [
                    { text: '確認', onPress: () => console.log('ok') }
                ],
                { cancelable: false }
            )
        }
        else if (offOn) {
            Alert.alert('花費點數抽獎', '你確定要花費30點數抽獎嗎？', [
                { text: '取消' },
                { text: '確認', onPress: rotateImg },


            ])
        } else { Alert.alert('不要亂點啦拜託了') }

    }
    const rotateImg = () => {

        if (offOn) {
            const allpoint = userInfo.AllPoint -30
            changePeople({AllPoint:allpoint})
            rotateImg1();
        }
    };

    const rotateImg1 = () => {
        //获取抽奖位置
        setoffOn(!offOn)
        let number = Math.floor(Math.random() * 8);
        if ((number / 8) == 0.875) {
            number = 1;
        }
        let oneTimeRotate = number / 8 + 3.0625;
        Animated.timing(rotateDeg, {
            toValue: oneTimeRotate,
            duration: 5000,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true
        }).start(() => {
            // setoffOn(!offOn)
            //动画结束时，会把toValue值，回调给callback
            rotateDeg.stopAnimation(() => {
                circle1(number)
            })
        });
    };

  
    const circle1 = (postion) => {
        const gift = drawData[postion]
        const id = gift.id
        const title = gift.title
  
        
        Alert.alert(id+'', title)
        const cupon = userInfo.cupon
        const gotPoint = userInfo.GotPoint
        let allPoint = userInfo.AllPoint

        let tempCuponData;
        if (id === 2) {//頭獎
            let data = GiftOption.find(item=>item.couponid === 'Elixir')
            if ((Array.isArray(cupon))){
                tempCuponData ={cupon: [...cupon, data]}
            }else {
                tempCuponData = {cupon : [data]}
            }
    
        } else if (id === 4 || id === 8) { //三獎
            let data = GiftOption.find(item=>item.couponid === 'pick')
            if ((Array.isArray(cupon))){
                tempCuponData ={cupon: [...cupon, data]}
            }else {
                tempCuponData = {cupon : [data]}
            }
        } else if (id === 6) { //二獎
            const afterGottingThePoint = allPoint + 40
            if ((Array.isArray(gotPoint))){
                tempCuponData = {
                    AllPoint: afterGottingThePoint,
                    GotPoint: [...gotPoint, {
                    points: 40,
                    type: 'Lottery',
                    time: new Date()
                }]}
            }else {
                tempCuponData = {
                    AllPoint: afterGottingThePoint,
                    GotPoint : [{
                    points: 40,
                    type: 'Lottery',
                    time: new Date()
                }]}
            }
        } else {
            return
        }
        changePeople(tempCuponData)
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.mainImg, {
                transform: [{
                    rotate: rotateDeg.interpolate({
                        inputRange: [0, 3],
                        outputRange: ['0deg', '1080deg']
                    })
                }]
            }]}>
                <View style={{ height: 360, width: 360, alignItems: "center" }}>
                    <Image style={{ position: "absolute", height: 360, width: 360, resizeMode: 'stretch' }} source={require('./imgs/circle_bg.png')} />
                    {drawData.map((one, index) => {
                        const rotateDeg = 22.5;
                        let translateX = 0;
                        let translateY = 0;
                        const rotateTemp = -rotateDeg - (index * 45);
                        const sinTemp = Math.sin(rotateDeg * Math.PI / 180) * 105;
                        const consTemp = Math.cos(rotateDeg * Math.PI / 180) * 105;
                        switch (index) {
                            case 0:
                                translateX = -sinTemp;
                                translateY = -consTemp;
                                break;
                            case 1:
                                translateX = -consTemp;
                                translateY = -sinTemp;
                                break;
                            case 2:
                                translateX = -consTemp;
                                translateY = sinTemp;
                                break;
                            case 3:
                                translateX = -sinTemp;
                                translateY = consTemp;
                                break;
                            case 4:
                                translateX = sinTemp;
                                translateY = consTemp;
                                break;
                            case 5:
                                translateX = consTemp;
                                translateY = sinTemp;
                                break;
                            case 6:
                                translateX = consTemp;
                                translateY = -sinTemp;
                                break;
                            case 7:
                                translateX = sinTemp;
                                translateY = -consTemp;
                                break;
                            default:
                                break
                        }
                        return (
                            <View key={one.id} style={{ justifyContent: "center", alignItems: "center", position: "absolute", zIndex: 99, height: 70, width: 60, top: 145, transform: [{ translateX: translateX }, { translateY: translateY }, { rotateZ: `${rotateTemp}deg` }] }}>
                                <Text style={{ fontSize: 12, color: "#74340A", marginBottom: 10 }}>{one.title}</Text>
                                <Image style={{ width: 50, height: 50, resizeMode: "contain" }} source={one.icon} />
                            </View>
                        )
                    })}
                </View >
            </Animated.View>
            <TouchableOpacity activeOpacity={0.9} onPress={() => { confirm() }} style={styles.centerPoint}>
                <Image source={require('./imgs/point_new.png')} style={{ height: 134, width: 107, resizeMode: "stretch", position: "absolute" }} />
                <Text style={{ color: "#ffffff", textAlign: "center", fontSize: 17, fontWeight: 'bold', width: 45, marginTop: 20 }}>{"開始抽獎" || "start game"}</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: 360,
        alignItems: 'center',
        backgroundColor: "#ffffff"
    },
    imgPoint: {
        width: 100,
        height: 100,
    },
    centerPoint: {
        position: 'absolute',
        left: Dimensions.get('window').width / 2 - 53,
        top: 100,
        zIndex: 100,
        height: 134,
        width: 107,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainImg: {
        width: 360,
        height: 360,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    }
})
export default circle