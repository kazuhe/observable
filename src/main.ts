import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import firebase from 'firebase'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://firestore.googleapis.com/v1/projects/observable-6f194/databases/(default)/documents';

const firebaseConfig = {
  apiKey: 'AIzaSyBLwx_dziBIaUVd1x5Pz_FujRUZVl3QIr4',
  authDomain: 'observable-6f194.firebaseapp.com',
  databaseURL: 'https://observable-6f194.firebaseio.com',
  projectId: 'observable-6f194',
  storageBucket: 'observable-6f194.appspot.com',
  messagingSenderId: '5909558403',
  appId: '1:5909558403:web:50e8ba2166d35346dfd7b6',
  measurementId: 'G-D1P0NBW4Q8'
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
