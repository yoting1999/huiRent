import { Button, Container, Content, Header, Body, Title, Input, Icon } from 'native-base';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import DatePicker from 'react-native-datepicker';

function SignUp(props) {
    const [name, setName] = useState(null)
    const [Date, setDate] = useState("2020-01-06");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(null);
    const [password2, setPassword2] = useState(null)
    const [number, setNumber] = useState(null)
    const { signUp, database, SelectImage, selectedImage, firebaseuri, message } = props
    const navigation = useNavigation();

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passError, setPassError] = useState(false)
    const [passError2, setPassError2] = useState(false)
    const [numberError, setNumberError] = useState(false)
    const [disable, setDisable] = useState(false)
    const press = async () => {
        if (((password != null && password.length >= 6) && (password2 != null && password2.length >= 6) && name != null) && password == password2) {
            return (
                await EmailCheck(email)
            )
        } else if ((password != null && password2 != null && name != null) && password == password2) {
            Alert.alert(
                '欄位輸入錯誤',
                '密碼需至少六位',
                [
                    { text: '確認', onPress: () => console.log('password error') }
                ],
                { cancelable: false }
            )
        } else {
            Alert.alert(
                '欄位輸入錯誤',
                '兩次輸入密碼不同！',
                [
                    { text: '確認', onPress: () => console.log('password error') }
                ],
                { cancelable: false }
            )
        }
    }

    const EmailCheck = async (email) => {
        var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        if (email.search(emailRule) != -1) {
            await signUp(email, password),
                await database(name, Date, email, number, firebaseuri),
                Alert.alert(
                    '註冊成功！',
                    '請到登入頁登入',
                    [
                        { text: '確認', onPress: () => navigation.navigate('Login') }
                    ],
                    { cancelable: false }
                )
        } else {
            Alert.alert(
                '欄位輸入錯誤',
                '電子信箱格式錯誤！',
                [
                    { text: '確認', onPress: () => console.log('email error') }
                ],
                { cancelable: false }
            )
        }
    }

    const handleBlurInputName = () => {
        if (!name) {
            setNameError(true)
        }
    }

    const handleBlurInputEmail = () => {
        if (!email) {
            setEmailError(true)
        }
    }

    const handleBlurInputPass1 = () => {
        if (!password) {
            setPassError(true)
        }
    }

    const handleBlurInputPass2 = () => {
        if (!password2) {
            setPassError2(true)
        }
    }

    const handleBlurInputNum = () => {
        if (!number) {
            setNumberError(true)
        }
    }

    useEffect(() => {
        if (!name) {
            setDisable(true)
            return
        }
        if (!email) {
            setDisable(true)
            return
        }
        if (!password) {
            setDisable(true)
            return
        }
        if (!password2) {
            setDisable(true)
            return
        }
        if (!number) {
            setDisable(true)
            return
        }
        setDisable(false)
    }, [name, email, password, password2, number])

    return (
        <Container>
            <Header>
                <Body>
                    <Title style={{ fontSize: 30 }}>HUIRENT  註冊</Title>
                </Body>
            </Header>
            <Content>
                <View style={styles.form}>
                    {/* <TouchableOpacity style={styles.profile} onPress={() => UploadImage()}>
                        <Icon name="user" type="FontAwesome5" style={{ fontSize: 60, color: "gray" }} />
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.profile} onPress={() => SelectImage()}>
                        <Image source={{ uri: selectedImage.localUri }} style={styles.logo} />
                    </TouchableOpacity>
                    <Text style={styles.text}>點按上方圓圈即可上傳個人照片
                        <Text style={styles.photowarn}>{message}</Text>
                    </Text>
                    <TextInput onBlur={handleBlurInputName} placeholder="姓名" style={styles.inputstyle} onChangeText={text => {
                        setName(text)
                        setNameError(false)
                    }} />
                    {nameError && <Text style={{ color: "#eb4034", marginLeft: -270 }}>請輸入姓名</Text>}
                    <DatePicker
                        style={{ width: 345, borderBottomWidth: 1, borderColor: "#D0D0D0", marginBottom: 15 }}
                        mode="date"
                        placeholder={Date}
                        format="YYYY-MM-DD"
                        minDate="1900-01-01"
                        maxDate="2020-12-31"
                        confirmBtnText="確認"
                        cancelBtnText="取消"
                        customStyles={{
                            dateIcon: {
                                position: 'relative',
                                // left: 0,
                                top: 4,
                                marginBottom: 10
                            },
                            dateInput: {
                                borderWidth: 0,
                            },
                            placeholderText: {
                                marginLeft: -195,
                                fontSize: 20
                            }
                        }}
                        onDateChange={(date) => { setDate(date) }}
                    />
                    <TextInput onBlur={handleBlurInputEmail} placeholder="電子信箱" style={styles.inputstyle} onChangeText={text => {
                        setEmail(text)
                        setEmailError(false)
                    }} />
                    {emailError && <Text style={{ color: "#eb4034", marginLeft: -240, marginBottom: 10 }}>請輸入電子信箱</Text>}
                    <TextInput onBlur={handleBlurInputNum} keyboardType='numeric' maxLength={10} placeholder="電話號碼" style={styles.inputstyle} onChangeText={text => {
                        setNumber(text)
                        setNumberError(false)
                    }} />
                    {numberError && <Text style={{ color: "#eb4034", marginLeft: -240, marginBottom: 10 }}>請輸入電話號碼</Text>}
                    <TextInput textContentType={'newPassword'} secureTextEntry={true} onBlur={handleBlurInputPass1} placeholder="密碼(需至少六位)" style={styles.inputstyle} onChangeText={text => {
                        setPassword(text)
                        setPassError(false)
                    }} />
                    {passError && <Text style={{ color: "#eb4034", marginLeft: -270, marginBottom: 10 }}>請輸入密碼</Text>}
                    <TextInput textContentType={'newPassword'} secureTextEntry={true} onBlur={handleBlurInputPass2} placeholder="再次輸入密碼" style={styles.inputstyle} onChangeText={text => {
                        setPassword2(text)
                        setPassError2(false)
                    }} />
                    {passError2 && <Text style={{ color: "#eb4034", marginLeft: -240, marginBottom: 10 }}>請再次輸入密碼</Text>}
                    <Button disabled={disable} block dark onPress={() => press()}><Text style={{ color: "white" }}>送出並註冊</Text></Button>
                </View>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 35,
        marginTop: 170
    },
    inputstyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1,
        fontSize: 20
    },
    profile: {
        flex: 1,
        marginBottom: 60,
        marginTop: -170,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        width: 150,
        height: 150,
        borderRadius: 120,
        borderWidth: 1,
        borderColor: "gray"
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 120,
    },
    text: {
        marginTop: -40,
        marginBottom: 30,
        marginLeft: 15,
        color: '#226387'
    },
    photowarn: {
        color: '#eb4034',
    }
})

export default SignUp