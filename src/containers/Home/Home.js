import React, { useEffect, useState } from 'react'
import Layout from '../../components/Home/Home1'

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
  //       equipments: [
  //       {type: '基本',equipment: ['麥克風','麥克風接線','鼓組','mmixer'] },
  //       {type: '吉他音箱', equipment: ['Ampeg 115w'] },
  //       {type: 'KB音箱', equipment: ['Peavey 300w'] },
  //       {type: '監聽', equipment: ['Lem k6 300w'] },

  //       ]
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