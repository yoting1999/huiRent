import React ,{useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../../components/Login/Login';

import { authLogin } from '../../store/actions/auth'
import agent from '../../lib/agent';


function Login() {
    const dispatch = useDispatch()

    const login = () => {
        dispatch(authLogin())
    }


    return <Layout login={login}/>
}

export default Login;