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

// Firebase has been initialized in firebaseInit.js


// Implementing firebase backend:

//Reference messages collection:
var messagesRef = firebase.database().ref('messages');

//Save messages to firebase:
//MessagesRef is like a table. All I am doing is pushing the data to the table
function saveMessage(name, email, message) {
    var newMessagesRef = messagesRef.push();
    newMessagesRef.set({
        name: name,
        email: email,
        message: message
    });
};

var validated = false;

// Runs submission to firebase function:
document.getElementById('submit').addEventListener('click', submitForm);

//Submit the form:
function submitForm(e) {
    e.preventDefault();

    //Get all the data from the form:
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    //Saving the message
    saveMessage(name, email, message);

    //Clear the fields after submitting:
    document.getElementById('contactForm').reset();

    //Display success message, then erase after 10 seconds:
    document.querySelector(".message-sent").style.display = "block";
    setTimeout(function () {
        document.querySelector(".message-sent").style.display = "none";
    }, 3000);
};