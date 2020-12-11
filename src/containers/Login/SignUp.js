import React, { useState } from 'react'
import Layout from '../../components/Login/SignUp'
import agent from '../../lib/agent'
import * as firebase from 'firebase';
import * as FirebaseCore from 'expo-firebase-core';



function SignUp(){
    const { People } = agent
    const database = async(name,date,email) =>{
        await People.addPeople(firebase.auth().currentUser.uid,{
            name:name,
            date:date,
            email:email,
            uid:firebase.auth().currentUser.uid
        })
    }
    async function signUp(email,password){
        try {
            const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
            database(name,email,date)
            if(res){
                console.log('User registered successfully!');
            }
        }
        catch(error){
            console.log('err', error)
        }
      }
    return <Layout signUp={signUp} database={database}/>
}

export default SignUp