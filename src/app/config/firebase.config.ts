import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqQ7MN2INzow_X6X4MG8ch6qQjB2U6s38",
  authDomain: "polevents-7cdf4.firebaseapp.com",
  databaseURL: "https://polevents-7cdf4-default-rtdb.firebaseio.com",
  projectId: "polevents-7cdf4",
  storageBucket: "polevents-7cdf4.firebasestorage.app",
  messagingSenderId: "917987546816",
  appId: "1:917987546816:web:cc8d3535b292afc6e9bf25"
};

export const app = initializeApp(firebaseConfig);