import React ,{useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../../components/settings/settings';
import * as firebase from 'firebase'
import { authLogout } from '../../store/actions/auth';

function UsedPoint(){
    const { UsedPoint } = agent
  const userInfo = useSelector(state=>state.authReducer.userInfo)
  const [reserveData, setReserveDate ] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

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

export default UsedPoint