function ProfilePic()
{
    var Funame=document.getElementById("uName").value;
    
    console.log("In Profile Page");
    
    var text = localStorage.getItem(Funame);   
    var obj= JSON.parse(text);   
    
    document.getElementById("fname")=obj[0].fname;
    document.getElementById("lname")=obj[0].lname;
    document.getElementById("pwd")=obj[0].pwd;
    document.getElementById("addr")=obj[0].addr;

    window.open("ProfilePage_ToDo.html","_self")

}

function Display()
{
    //window.open("UpdateProfile_ToDo.html","_self")
alert("In Display through Profile page");

}

