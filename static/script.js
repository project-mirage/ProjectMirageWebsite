// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyD_PvEV1Si5xClTlMfwgx5C84MMtEfamcU",
    authDomain: "projectmiragecontact.firebaseapp.com",
    databaseURL: "https://projectmiragecontact-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "projectmiragecontact",
    storageBucket: "projectmiragecontact.appspot.com",
    messagingSenderId: "931779757647",
    appId: "1:931779757647:web:ac4f1497bb3ee6ed3bcc3a",
    measurementId: "G-SSSEMRDYYL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Reference contactInfo collections
let contactInfo = firebase.database().ref("websiteContact")

// Listening to Form
document.querySelector(".contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault()

    // Get input values
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    saveContactInfo(name, email, message);
    document.querySelector(".contactForm").reset();

}

// Save info to Firebase
const saveContactInfo = (name, email, message) => {
    let newContactInfo = contactInfo.push();

    newContactInfo.set(
        {
            name: name,
            email: email,
            message: message
        }
    )
}

// Div Scroll
const scrollToElement = (id) => {
    const target = document.getElementById(id);

    // true to align to top of window
    target.scrollIntoView(true);
};
