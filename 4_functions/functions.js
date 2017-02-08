function passwordValidation(){
    var pass = document.getElementById("password").value;
    if (pass.length < 8){
        $('#message').html("Password Must Be 8 characters long!");
    } else if (pass.search(/[a-z]/) < 0) {
        $('#message').html("Password Must have one Lower Case Letter!");
    }else if (pass.search(/[A-Z]/) < 0) {
        $('#message').html("Password Must have one Upper Case Letter!");
    } else {
        $('#message').html("Success!");
    }
    
}