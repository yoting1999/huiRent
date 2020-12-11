import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container, Content, Button } from 'native-base'
import Header from '../UI/Header'
import { ALIANS, TIME } from '../../constants/rooms'

function ReserveConfirm(props) {
  const { addReserve, reserveData } = props
  console.log('reserveData', reserveData)
  const tagToTime = (tag) => {
    const time = TIME.find((item)=>item.tag === tag).time
    return time
  }
  return (
    <Container>
      <Header/>
      <Content>
        <Text>CONFIRM</Text>
        <Text>{ALIANS[reserveData.room]}</Text>
        <Text>{reserveData.date}</Text>
        {reserveData.time.map(t=><Text>{tagToTime(t)}</Text>)}
        <Button block onPress={addReserve}>
          <Text>確認</Text>
        </Button>
      </Content>
    </Container>
  )
}

export default ReserveConfirm