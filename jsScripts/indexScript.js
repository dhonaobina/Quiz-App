function playSound(audioName, loop) {
    let audioStart = new Audio(audioName);
    audio.loop = loop;
    audio.play()
}
playSound("styles/music/gamekaba.mp3", true)

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
    location.replace("quiz.html")
}
};