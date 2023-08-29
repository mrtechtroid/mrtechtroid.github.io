import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getFirestore, collection, addDoc,serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBxyMo6yQ20stBIOsHUgToNgm4PmCKxTX4",
    authDomain: "mttcode.firebaseapp.com",
    projectId: "mttcode",
    storageBucket: "mttcode.appspot.com",
    messagingSenderId: "630582975513",
    appId: "1:630582975513:web:9aae0cf9917d7c34281e88",
    measurementId: "G-M4M50WQ52Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

document.getElementById("new_paste").addEventListener("click", async function () {
    const docRef = await addDoc(collection(db, "pasteit"), {
        language: document.getElementById("ed_lang").value,
        code: window.editor.getValue(),
        createdon: serverTimestamp()
    }).then(function(){
        document.getElementById("ed_url").value = "https://mtt.one/p#/"+docRef.id
    })
})