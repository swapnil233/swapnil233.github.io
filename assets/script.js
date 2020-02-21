// Firebase init data
var config = {
    apiKey: "AIzaSyBlJPK4UnZBVtbfAqmkExfgB_8L4VHF0mY",
    authDomain: "swapnil-portfolio-website.firebaseapp.com",
    databaseURL: "https://swapnil-portfolio-website.firebaseio.com",
    projectId: "swapnil-portfolio-website",
    storageBucket: "swapnil-portfolio-website.appspot.com",
    messagingSenderId: "1070607632934"
};

// Init Firebase
firebase.initializeApp(config);

// Implementing firebase backend:

// Reference messages collection:
var messagesRef = firebase.database().ref('messages');

// Save messages to firebase:

// Pushing new msg data to the messagesRef array/table
function saveMessage(name, email, message) {
    var newMessagesRef = messagesRef.push();
    newMessagesRef.set({
        name: name,
        email: email,
        message: message
    });
};

// Runs submission to firebase function:
document.getElementById('submit').addEventListener('click', submitForm);

//-- MAIN -- Submit the form:
function submitForm(e) {
    e.preventDefault();

    // Get all the data from the form:
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // If fields aren't empty, save and send the message. Otherwise, throw error
    if (name !== "" && email !== "" && message !== "") {

        //Submit the msg
        saveMessage(name, email, message);

        //Display success msg, then erase after 10 seconds:
        document.getElementsByClassName('message-sent')[0].style.display = "block";
        setTimeout(() => {
            document.getElementsByClassName('message-sent')[0].style.display = "none";
        }, 3000);

        //Clear the fields after submitting:
        document.getElementById('contactForm').reset();
    } else {
        //Display not-sent message, then erase after 10 seconds:
        document.getElementsByClassName('message-not-sent')[0].style.display = "block";
        setTimeout(() => {
            document.getElementsByClassName('message-not-sent')[0].style.display = "none";
        }, 3000);
    }
};

// Smooth scroll to under the arrow
$(document).ready(function () {
    var scrollLink = $('.scroll');
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});

// Smooth scroll to the top
$('.click').click(function (e) {
    e.preventDefault();
    $('html, body').animate({ 
        scrollTop: 0 
    }, 1000);
});