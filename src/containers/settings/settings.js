import React ,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../components/settings/settings';
import * as firebase from 'firebase'
import { authLogout, setAuthInfo } from '../../store/actions/auth';
import agent from '../../lib/agent'
import * as ImagePicker from 'expo-image-picker';


function settings(){
    const userInfo = useSelector(state=>state.authReducer.userInfo)

    const dispatch = useDispatch()
    const { People } = agent
    const [selectedImage, setSelectedImage] = useState({ localUri: '' });


    const logout = async() => {
        try{
            await firebase.auth().signOut();
            dispatch(authLogout())
            console.log('logout')
        }
        catch(err){
         console.log('err', err)   
        }
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

    const selectImage = async() =>{
          const pickerResult = await ImagePicker.launchImageLibraryAsync();
            if (!pickerResult.cancelled) {
                return await uploadImage(pickerResult.uri)
              }
      }

      const uploadImage = async(uri) => {
        try {
            const filename = uri.split('/').pop();
            const response = await fetch(uri);
            const blob = await response.blob();
            // Create a reference
            const ref = firebase.storage().ref().child(filename);
            // Upload file  
            const snapshot = await ref.put(blob);
            // getDownloadURL
            const url = await snapshot.ref.getDownloadURL();
            return url
        }catch(err) {
            console.log('err', err)
        }
      }



    const changePhoto = async()=>{
        const uri = await selectImage()
        // console.log('res', res)

       const res = await People.changePeople(userInfo.uid, userInfo.ordererid,{photo:uri})
    //    if(res.status = 200) setAuthInfo()
    }

    return <Layout logout={logout} changePhoto={changePhoto}/>
}

export default settings