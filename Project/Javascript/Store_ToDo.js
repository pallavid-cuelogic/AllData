function Store()
{
    var arr = [];

    var uname=document.getElementById("uName").value;
    var fname=document.getElementById("fName").value;
    var lname=document.getElementById("lName").value;
    var pwd=document.getElementById("Pwd").value;
    var addr=document.getElementById("Addr").value;
    var gen=document.getElementById("Gender").value;
    var br=document.getElementById("Browse").value;

    var obj ={
        uname : uname,
        fname : fname,
        lname : lname,
        pwd : pwd,
        addr : addr,
        gen : gen,
        br : br
    };
 
    console.log(fname);
    console.log(lname);
    console.log(addr);
    console.log(gen);
    console.log(br);

    //localStorage.clear();

    text = localStorage.getItem(document.getElementById("uName").value);
    var object= JSON.parse(text);

    var Check=Validate(uname,fname,lname,pwd);

    if(object==null && Check==true)
    {
        alert("Registered Successfully");
        arr.push(obj);
        myObj = JSON.stringify(arr);   
        localStorage.setItem(document.getElementById("uName").value,myObj);
    }
    else if(object!=null)
    {
        alert("User Id Already Exits...");
    }
}


