import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'native-base'
import { BarCodeScanner } from 'expo-barcode-scanner';
import Colors from '../../styles/Colors';

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>取得相機權限</Text>;
  }
  if (hasPermission === false) {
    return <Text>沒有連結至香雞</Text>;
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
