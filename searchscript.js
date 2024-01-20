import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const userdataTemplate = document.querySelector("[data-user-template]")
const searchList = document.querySelector("[list-search]")
const searchTab = document.querySelector("[search-input]")

const db =  firestore;
const usersCollection = db.collection('Users');

let users = []

searchTab.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()  
  users.forEach(user => {
    const isVisible = user.name.toLowerCase().includes(value) || user.username.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

function searchUser() {
  usersCollection.get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        const user = doc.data();
        const card = userdataTemplate.content.cloneNode(true).children[0];
        const pic = card.querySelector("[picture-data]");
        const username = card.querySelector("[username-data]");
        const name = card.querySelector("[name-data]");
        pic.src = user.Imageurl;
        username.textContent = user.username;
        name.textContent = user.fullname;
        searchList.append(card);
        return { element: card, name: user.fullname, username: user.username };
      });
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
}

document.addEventListener('DOMContentLoaded', searchUser())