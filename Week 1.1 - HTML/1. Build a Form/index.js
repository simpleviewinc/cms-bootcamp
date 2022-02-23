$(document).ready(function(){

    $('#submit').click(function (e) { 
        e.preventDefault();
        console.log("Submit Button Click");
        location.href = "/login/";
    });

});
