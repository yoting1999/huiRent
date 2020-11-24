import { Button, Container, Content } from 'native-base';
import React from 'react';
import { useState } from 'react';
import {View, Text,TextInput,StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker';

function SignUp(props){
    const [Date,setDate] = useState("2020-01-06")
    return(
        <Container>
            <Content>
                <View style={styles.form}>
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
                    <TextInput placeholder="電子信箱" style={styles.inputstyle}/>
                    <TextInput placeholder="密碼" style={styles.inputstyle} secureTextEntry={true}/>
                    <TextInput placeholder="再次輸入密碼" style={styles.inputstyle} secureTextEntry={true}/>
                    <Button block onPress={()=>console.log(Date)}><Text style={{color:"white"}}>送出</Text></Button>
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
})

export default SignUp