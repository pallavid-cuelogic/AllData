      
    var text = localStorage.getItem("id");   

    console.log(text);  
    
    var t=localStorage.getItem(text);
    var obj= JSON.parse(t); 

    console.log(obj);  

  document.getElementById("fName").value=obj[0].fname;
  document.getElementById("lName").value=obj[0].lname;
  document.getElementById("Pwd").value=obj[0].pwd;
  document.getElementById("Addr").value=obj[0].addr;

    //window.open("ProfilePage_ToDo.html","_self")

//}

function Display()
{
    //window.open("UpdateProfile_ToDo.html","_self")
    alert("In Display through Profile page");
}

