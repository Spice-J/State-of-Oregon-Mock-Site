
function confirmEmail() {
    var email = document.getElementById("email").value;
    var confemail = document.getElementById("confemail").value;
    if(email !== confemail) {
       alert('Email Does Not Match!');
    };
};