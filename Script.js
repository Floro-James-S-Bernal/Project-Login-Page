function Login() {
    var User = document.getElementById("Name");
    var defUse = User.defaultValue;
    var curUse = User.value;
    var Pass = document.getElementById("Word");
    var defPass = Pass.defaultValue;
    var CurPass = Pass.value;
    if(defUse == curUse & defPass != CurPass){
        document.getElementById("Please").innerHTML = "Please enter your Username.";
    }
    if(defUse != curUse & defPass == CurPass){
        document.getElementById("Please").innerHTML = "Please enter your Password.";
    }
    if(defUse == curUse & defPass == CurPass){
        document.getElementById("Please").innerHTML = "Please enter your Username and Password.";
    }
    if(defPass != curUse & defPass != CurPass){
        document.getElementById("Please").innerHTML = "User not found.";
    }
}