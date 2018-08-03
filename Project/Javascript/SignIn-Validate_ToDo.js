function SignIn()
{
    var Funame=document.getElementById("uName").value;
    var Fpwd=document.getElementById("pwd").value;

    var text = localStorage.getItem(Funame);   
    var obj= JSON.parse(text);   
    
    if(obj==null)
    {
        alert("User Id doesn't Exists...")
        return false;
    }

    if(obj[0].pwd!=Fpwd)
    {
        alert("Invalid Password...");
        return false;
    }

    alert("Login Successfully");

    localStorage.setItem("id",Funame);

    //ProfilePic(Funame);

    window.open("ProfilePage_ToDo.html","_self");

}
 
