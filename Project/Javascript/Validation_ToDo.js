function Validate(name,fname,lname,pwd)
{
    var filter=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 

    console.log(name);

   if(!name.match(filter))
    {
        alert("Invalid User Id");
        name.focus;
        return false;        
    }
    
    if(fname=="")
    {
        alert("***First name required***");
        return false; 
    }

    if(lname=="")
    {
        alert("***Last name required***");
        return false; 
    }

    if(pwd=="")
    {
        alert("***Password required***");
        return false; 
    }

    var len=pwd.length;

    if(len<5)
    {
        alert("***Password must be at least 5 digit ***");
        return false; 
    }

    return true;
}
 


