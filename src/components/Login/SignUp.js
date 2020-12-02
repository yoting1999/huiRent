import { Button, Container, Content, Header, Body, Title, Input, Icon } from 'native-base';
import React,{useState} from 'react';
import {View, Text,TextInput,StyleSheet, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-datepicker';

function SignUp(props){
    const [Date,setDate] = useState("2020-01-06");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {signUp} = props
    return(
        <Container>
            <Header>
                <Body>
                    <Title style={{fontSize:30}}>HUIRENT  註冊</Title>
                </Body>
            </Header>
            <Content>
                <View style={styles.form}>
                    <TouchableOpacity style={styles.profile} onPress={()=>console.log('上傳照片')}>
                        <Icon name="user" type="FontAwesome5" style={{fontSize:60,color:"gray"}} />
                    </TouchableOpacity>
                    <TextInput placeholder="姓名" style={styles.inputstyle}/>
                    <DatePicker
                        style={{width: 350}}
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
                                borderWidth:0,
                            },
                            placeholderText:{
                                marginLeft:-195,
                                fontSize:20
                            }
                        }}
                        onDateChange={(date) => {setDate(date)}}
                    />
                    <Text style={{color:"#D0D0D0",marginTop:-5,marginBottom:10}}>––––––––––––––––––––––––––––––––––––––––––––––––––</Text>
                    <TextInput placeholder="電子信箱" style={styles.inputstyle} onChangeText={text=>setEmail(text)}/>
                    <TextInput placeholder="密碼" style={styles.inputstyle} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
                    <TextInput placeholder="再次輸入密碼" style={styles.inputstyle} secureTextEntry={true}/>
                    <Button block dark onPress={()=>signUp(email,password)}><Text style={{color:"white"}}>送出並註冊</Text></Button>
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
        marginTop:190
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
        flex:1,
        marginBottom:80,
        marginTop:-170,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        width: 150,
        height: 150,
        borderRadius: 120,
        borderWidth:1,
        borderColor:"gray"
    }
})

export default SignUp