import { Body,Button, Container, Content, Header, Title } from 'native-base';
import React,{useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text,TextInput,StyleSheet,Image} from 'react-native';
import route from '../../constants/route';

function Login(props){
    const { login } = props
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigation = useNavigation();
    return(
        <Container>
            {/* <Header>
                <Body>
                    <Title style={{fontFamily:'Arial Black',fontSize:30}}>HuiRent</Title>
                </Body>
            </Header> */}
        <Content>
            <View style={styles.form}>
                <Image source={require('../../../pic/music-notes.png')} style={{width:90,height:90,marginTop:-200}}/>
                <Text style={{fontSize:50,fontWeight:'700',marginBottom:80}}>HUIRENT

                </Text>
                <TextInput
                    placeholder="請輸入帳號(電子信箱)"
                    style={styles.inputstyle}
                    onChangeText={text=>setEmail(text)}
                />
                <TextInput
                    placeholder="請輸入密碼"
                    style={styles.inputstyle}
                    secureTextEntry={true}
                    onChangeText={text=>setPassword(text)}
                />
                <Button
                    block
                    dark
                    style={styles.button}
                    onPress={()=>login(email, password)}
                >
                    <Text style={{color:"#fff"}}>登入</Text>
                </Button>
                <Button
                    transparent
                    style={{alignSelf:'center'}}
                    onPress={()=>navigation.navigate(route.SignUp)}
                >
                <Text style={{color:"#86BBD8"}}>註冊</Text>
            </Button>
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
        marginTop:300
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
    button:{
        padding:10,
    }
})

export default Login