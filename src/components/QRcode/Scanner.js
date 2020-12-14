import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'native-base'
import { BarCodeScanner } from 'expo-barcode-scanner';
import Colors from '../../styles/Colors';

import Modal from './Modal'

export default function Scanner(props) {
  const { getReserve, getOrderer, isLoading } = props
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  const [reserveData, setReserveData] = useState(null)
  const [ordererData, setOrdererData] = useState(null)
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // useEffect(()=>{
  //   if(!reserveData) return
  // }, [reserveData])

  const handleBarCodeScanned = async({ type, data }) => {
    setScanned(true);
    const reserveRes = await getReserve(data)
    if(reserveRes) {
      const ordererRes = await getOrderer(reserveRes.userId)
      setOrdererData(ordererRes)
    }
    setReserveData(reserveRes)
    setIsVisible(true)
  };

  if (hasPermission === null) {
    return <Text>取得相機權限</Text>;
  }
  if (hasPermission === false) {
    return <Text>沒有連結至相機</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{width: 500, height: 500}}
      />
      <View style={{ margin: 12 }}>
        {scanned && (
          <Button bordered block  onPress={()=>setScanned(false)} style={{ borderColor: '#fff' }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>再次掃描</Text>
          </Button>
        )}
      </View>
      <Modal
        isLoading={isLoading}
        data={reserveData}
        ordererData={ordererData}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
});
