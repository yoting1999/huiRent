import axios from 'axios'

const Rooms = {
  getRooms: () => axios.get('https://huirent-72fd3.firebaseio.com/rooms.json'),
  addRoom: (body) => axios.post('https://huirent-72fd3.firebaseio.com/rooms.json', body)
}

export default agent = {
  Rooms
}