import axios from 'axios'

const Rooms = {
  getRooms: () => axios.get('https://huirent-72fd3.firebaseio.com/rooms.json'),
  addRoom: (body) => axios.post('https://huirent-72fd3.firebaseio.com/rooms.json', body)
}

const People = {
  addPeople: (body) => axios.post('https://huirent-72fd3.firebaseio.com/people.json',body)
}

export default agent = {
  Rooms,
  People
}