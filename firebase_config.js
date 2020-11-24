import firebase from 'firebase';

export const config = {
    apiKey: "AIzaSyBW9KF6V5CasWCAuwVxNVrSVfceUjjujtM",
    authDomain: "huirent-72fd3.firebaseapp.com",
    databaseURL: "https://huirent-72fd3.firebaseio.com",
    projectId: "huirent-72fd3",
    storageBucket: "huirent-72fd3.appspot.com",
    messagingSenderId: "45601848134",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
