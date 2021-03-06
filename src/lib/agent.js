import axios from 'axios'

const Rooms = {
  getRooms: () => axios.get('https://huirent-72fd3.firebaseio.com/rooms.json'),
  addRoom: (body) => axios.post('https://huirent-72fd3.firebaseio.com/rooms.json', body)
}

const People = {
  addPeople: (uid, body) => axios.post(`https://huirent-72fd3.firebaseio.com/people/${uid}.json`, body),
  getPeople: (uid) => axios.get(`https://huirent-72fd3.firebaseio.com/people/${uid}.json`),
  changePeople: (uid, ordererId, body) => axios.patch(`https://huirent-72fd3.firebaseio.com/people/${uid}/${ordererId}.json`, body),
  // changePhoto: (uid, body) => axios.patch(`https://huirent-72fd3.firebaseio.com/people/${uid}.json`, body)
}

const Reserve = {
  addReserve: (body) => axios.post('https://huirent-72fd3.firebaseio.com/reserves.json', body),
  getReserves: () => axios.get('https://huirent-72fd3.firebaseio.com/reserves.json'),
  getReserve: (id) => axios.get(`https://huirent-72fd3.firebaseio.com/reserves/${id}.json`),
  changeReserve: (id, body) => axios.patch(`https://huirent-72fd3.firebaseio.com/reserves/${id}.json`, body),
  deleteReserve:(id) => axios.delete(`https://huirent-72fd3.firebaseio.com/reserves/${id}.json`),
}
const Coupon = {
  addCoupon: (uid, body) => axios.post(`https://huirent-72fd3.firebaseio.com/people/${uid}.json`, body),
  getPoint: (uid) => axios.get(`https://huirent-72fd3.firebaseio.com/people/${uid}.json`),
  updateCoupon: (uid,body) => axios.patch(`https://huirent-72fd3.firebaseio.com/people/${uid}/-MPbPigenKbnEhXGqz2q.json`,body),
}
export default agent = {
  Rooms,
  People,
  Reserve,
  Coupon
}