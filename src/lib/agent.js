import axios from 'axios'

const Rooms = {
  getRooms: () => axios.get('https://huirent-72fd3.firebaseio.com/rooms.json'),
  addRoom: (body) => axios.post('https://huirent-72fd3.firebaseio.com/rooms.json', body)
}

const People = {
  addPeople: (uid, body) => axios.post(`https://huirent-72fd3.firebaseio.com/people/${uid}.json`, body),
  getPeople: (uid) => axios.get(`https://huirent-72fd3.firebaseio.com/people/${uid}.json`),
}

export default agent = {
  Rooms,
  People
}