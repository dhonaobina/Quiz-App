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
        var ID = alert("Please click OK to start the quiz!")
        if (ID !=null)
        {
            document.getElementById("email").value = ID;
        }
        document.getElementById("email").focus();
        return true;
    }

function startQuiz() {
    location.replace("https://dhonaobina.github.io/Quiz-App/quiz.html")    
}


};