export const ROOMS = [
  {
    name: '大練團室',
    alians: 'BIG',
    price: 400,
    uri: 'https://ysolife.com/wp-content/uploads/2017/11/05-%E5%A4%A7%E7%B7%B4-min-768x510.jpg',
    equipments: [
      {type: '基本' ,equipment: ['麥克風','麥克風接線','鼓組','mixer'] },
      {type: '吉他音箱', equipment: ['Marshall DSL100', 'MX412'] },
      {type: 'Bass音箱', equipment: ['Little Mark 250 15th Anniversary', 'Traveler'] },
      {type: '監聽', equipment: ['Superlux SF12'] },
    ]
  },
  {
    name: '中練團室',
    alians: 'MEDIUM',
    price: 300,
    uri: 'http://www.irockmusic.com.tw/wp-content/uploads/2019/11/IMG_0761-1024x683.jpg',
    equipments: [
      {type: '基本' ,equipment: ['麥克風','麥克風接線','鼓組','mixer'] },
      {type: '吉他音箱', equipment: ['VOX 真空管100w','Marshall 100w'] },
      {type: 'Bass音箱', equipment: ['Ampeg 115w'] },
      {type: 'KB音箱', equipment: ['Peavey 300w'] },
      {type: '監聽', equipment: ['Lem k6 300w'] },
    ]
  },
  {
    name: '小練團室',
    alians: 'SMALL',
    price: 200,
    uri: 'http://www.irockmusic.com.tw/wp-content/uploads/2018/07/%E5%9C%98%E5%AE%A4%E5%87%BA%E7%A7%9F.jpg',
    equipments: [
      {type: '基本' ,equipment: ['麥克風','麥克風接線','鼓組','mixer'] },
      {type: '吉他音箱', equipment: ['VOX 真空管100w','Marshall 100w'] },
      {type: 'Bass音箱', equipment: ['Fender 100w'] },
      {type: 'KB音箱', equipment: ['Peavey 300w'] },
      {type: '監聽', equipment: ['Lem k6 300w', 'Lem k3 350w'] },
    ]
  },
  {
    name: '鼓室',
    alians: 'DRUM',
    price: 50,
    uri:   'https://img.ruten.com.tw/s2/7/f7/f2/21729744938994_881.JPG',
    equipments: [
      {type: '基本' ,equipment: ['麥克風','麥克風接線','鼓組','mixer'] },
      {type: '吉他音箱', equipment: ['Ampeg 115w'] },
      {type: 'KB音箱', equipment: ['Peavey 300w'] },
      {type: '監聽', equipment: ['Lem k6 300w'] },
    ]
  }
]

export const ALIANS = {
  'BIG': '大練團室',
  'MEDIUM': '中練團室',
  'SMALL': '小練團室',
  'DRUM': '鼓室',
}

export const TIME = [
  {tag: 'A', time: '9:00-10:00'},
  {tag: 'B', time: '10:00-11:00'},
  {tag: 'C', time: '12:00-13:00'},
  {tag: 'D', time: '13:00-14:00'},
  {tag: 'E', time: '14:00-15:00'},
  {tag: 'F', time: '15:00-16:00'},
  {tag: 'G', time: '16:00-17:00'},
  {tag: 'H', time: '17:00-18:00'},
  {tag: 'I', time: '18:00-19:00'},
  {tag: 'J', time: '19:00-20:00'},
  {tag: 'K', time: '20:00-21:00'},
  {tag: 'L', time: '21:00-22:00'},
]