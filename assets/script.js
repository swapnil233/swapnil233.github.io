//Initialize Firebase, has to be at the top
var config = {
    apiKey: "AIzaSyBlJPK4UnZBVtbfAqmkExfgB_8L4VHF0mY",
    authDomain: "swapnil-portfolio-website.firebaseapp.com",
    databaseURL: "https://swapnil-portfolio-website.firebaseio.com",
    projectId: "swapnil-portfolio-website",
    storageBucket: "swapnil-portfolio-website.appspot.com",
    messagingSenderId: "1070607632934"
};
firebase.initializeApp(config);

// Implementing firebase backend:

//Reference messages collection:
var messagesRef = firebase.database().ref('messages');

//Save messages to firebase:
//messagesRef is like a table/array. All I am doing is pushing the data to the table
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

    //Get all the data from the form:
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    //Variable to determine if all fields filled in
    var validated = false;

    //If fields aren't empty, save and send the message
    if (name !== "" && email !== "" && message !== "") {
        validated === true;

        //Submit the msg
        saveMessage(name, email, message);

        //Display success msg, then erase after 10 seconds:
        document.getElementsByClassName('message-sent')[0].style.display = "block";
        setTimeout(() => {
            document.getElementsByClassName('message-sent')[0].style.display = "none";
        }, 3000);

        //Clear the fields after submitting:
        document.getElementById('contactForm').reset();
    }

    //If fields ARE empty, send error message
    else {
        validated === false;
        //Display not-sent message, then erase after 10 seconds:
        document.getElementsByClassName('message-not-sent')[0].style.display = "block";
        setTimeout(() => {
            document.getElementsByClassName('message-not-sent')[0].style.display = "none";
        }, 3000);
    }
};

// Smooth scroll code made using JQuery:
$(document).ready(function () {

    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 20;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    }); // End of smooth scroll
});

// Smooth scroll to top animation
$('.click').click(function (e) {
    e.preventDefault();

    $('html, body').animate({ 
        scrollTop: 0 
    }, 1000);
});