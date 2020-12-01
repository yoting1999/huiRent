import React from 'react'
import Layout from '../../components/Login/SignUp'
import agent from '../../lib/agent'
import * as firebase from 'firebase';
import * as FirebaseCore from 'expo-firebase-core';



function SignUp(){
    async function signUp(email,password){
        try {
            const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
            if(res){
                console.log('User registered successfully!');
            }
        }
        catch(error){
            console.log('err', error)
        }
      }   
    return <Layout signUp={signUp}/>
}

export default SignUp