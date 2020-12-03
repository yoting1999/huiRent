import React ,{useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../../components/settings/settings';
import * as firebase from 'firebase'
import { authLogout } from '../../store/actions/auth';

function settings(){

    const dispatch = useDispatch()

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

    return <Layout logout={logout}/>
}

export default settings