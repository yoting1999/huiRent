import React ,{useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../../components/Login/Login';

import { authLogin } from '../../store/actions/auth'
import agent from '../../lib/agent';


function Login() {c61d1b084772d8765c0a6965121af080aacca83
    const dispatch = useDispatch()

    const login = () => {
        dispatch(authLogin())
    }


    return <Layout login={login}/>
}

export default Login;