import React, { useState, useEffect } from 'react'
import Layout from '../../components/Login/SignUp'
import agent from '../../lib/agent'
import * as firebase from 'firebase';
import * as FirebaseCore from 'expo-firebase-core';
import * as ImagePicker from 'expo-image-picker';



function SignUp() {
    const { People } = agent
    const [selectedImage, setSelectedImage] = useState({ localUri: '' });
    const [firebaseuri,setFirebaseuri] = useState('')
    const [message, setMessage] = useState("")
    const database = async (name, date, email, number,uri) => {
        await People.addPeople(firebase.auth().currentUser.uid, {
            name: name,
            date: date,
            email: email,
            number: number,
            uid: firebase.auth().currentUser.uid,
            position: "user",//身分
            UsedPoint: '0',//已使用點數
            GotPoint: '0',//獲得點數
            cupon: '0',
            photo:uri
        })
    }

    useEffect(()=>{
        (async () => {
            if (Platform.OS !== 'web') {
              const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
              if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
              }
            }
          })()
    },[])

    async function signUp(email, password) {
        try {
            const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
            if (res) {
                console.log('User registered successfully!');
            }
        }
        catch (error) {
            console.log('err', error)
        }
    }

    const SelectImage = async () => {
            const pickerResult = await ImagePicker.launchImageLibraryAsync();
            console.log(pickerResult);
            if (!pickerResult.cancelled) {
                setSelectedImage({ localUri: pickerResult.uri });
                await uploadImage(pickerResult.uri)
              }
    }

    const uploadImage = async(uri) => {
        setMessage("上傳中，請稍後")
        const filename = uri.split('/').pop();
        const response = await fetch(uri);
        const blob = await response.blob();
        // Create a reference
        const ref = firebase.storage().ref().child(filename);
        // Upload file  
        const snapshot = await ref.put(blob);
        // getDownloadURL
        const url = await snapshot.ref.getDownloadURL();
        await setFirebaseuri(url)
        setMessage("上傳成功！")
        console.log("url:"+url);
      }

    return <Layout signUp={signUp} message={message} database={database} SelectImage={SelectImage} selectedImage={selectedImage} firebaseuri={firebaseuri}/>
}

export default SignUp