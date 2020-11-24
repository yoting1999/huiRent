import { Body,Button, Container, Content, Header, Title } from 'native-base';
import React,{useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text,TextInput,StyleSheet} from 'react-native';
import route from '../../constants/route';

function Login(props){
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
                <Text style={{fontFamily:'Arial Black',fontSize:50,fontWeight:'700',marginBottom:130,marginTop:-130}}>LOGO</Text>
                <TextInput placeholder="請輸入帳號(電子信箱)" style={styles.inputstyle} onChangeText={text=>setEmail(text)}/>
                <TextInput placeholder="請輸入密碼" style={styles.inputstyle} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
                <Button block dark style={styles.button}><Text style={{color:"#fff"}}>登入</Text></Button>
                <Button transparent style={{alignSelf:'center'}} onPress={()=>navigation.navigate(route.SignUp)}><Text style={{color:"#86BBD8"}}>註冊</Text></Button>
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