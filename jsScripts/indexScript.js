function validation() {
var name = document.forms["regForm"]["name"];
var email = document.forms["regForm"]["email"];

if (document.getElementById('name').value == '')
{
    alert("Please enter your name.");
    document.getElementById('name').focus();
    return false;
}


if (email.value == '')
    {
        var ID = alert("Please enter your email address to continue.");
        if (ID !=null)
        {
            document.getElementById("email").value = ID;
        }
        document.getElementById("email").focus();
        return false;
    }

function startQuiz() {
    location.replace("quiz.html")
}
};