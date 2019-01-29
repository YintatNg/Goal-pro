import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCEDW8OWtQd8-yI9GsaEj7kmNDmWX9ouus",
    authDomain: "goal-pro-919a6.firebaseapp.com",
    databaseURL: "https://goal-pro-919a6.firebaseio.com",
    projectId: "goal-pro-919a6",
    storageBucket: "goal-pro-919a6.appspot.com",
    messagingSenderId: "871116889756"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');