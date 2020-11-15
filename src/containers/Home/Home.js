import React, { useEffect, useState } from 'react'
import Layout from '../../components/Home/Home'

import agent from '../../lib/agent'

function Home() {

  const { Rooms } = agent

  // test post
  // const addRoom = async () => {
  //   try {
  //     console.log('post')
  //     await Rooms.addRoom({
  //       name: '展演廳',
  //       price: 400,
  //       equipment: [{type: '吉他音箱', num: 2}, {name: '爵士鼓', num: 1 }]
  //     })
  //   } catch(err) {
  //     console.log('err', err)
  //   }
  // }

  // test fetch the data use RESTful API
  const getRooms = async() => {
    try {
      const res = await Rooms.getRooms()
      console.log('res', res.data)
    } catch(err) {
      console.log('err', err)
    }
  }

  useEffect(()=>{
    getRooms()
  }, [])

  return <Layout />
}

export default Home