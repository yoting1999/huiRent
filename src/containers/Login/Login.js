import React ,{useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../../components/Login/Login';
import * as firebase from 'firebase'

import { authLogin } from '../../store/actions/auth'
import agent from '../../lib/agent';


function Login() {
    const [message,setMessage] = useState("");
    const dispatch = useDispatch()

    const login = async(email, password) => {
        try{
            const result = await firebase.auth().signInWithEmailAndPassword(email, password);
            if(result) {
                dispatch(authLogin())
            }
        }
        catch(err){
            setMessage(err)
            console.log('err', err)   
        }
    }


    return <Layout login={login} message={message}/>
}

export default Login;