var userData;
    if(localStorage.getItem('userData')===null)
    {
        var userData=[];
        localStorage.setItem('userData',JSON.stringify(userData));

    }
    var userData=JSON.parse(localStorage.getItem('userData'));
    document.querySelector('form').addEventListener('submit', addData);
    function addData()
    {
        event.preventDefault();
        
        var userObj={
            name:document.getElementById("name").value,
            contact:document.getElementById("contact").value,
            password:document.getElementById("password").value,
            email:document.getElementById("email").value,  
        }
        if(userObj.name!==""&& userObj.contact!=="" && userObj.password!=="" && userObj.email!=="")
        {
        userData.push(userObj);
        localStorage.setItem('userData',JSON.stringify(userData));
        window.location.reload();
        }
        else
        {
            alert("Fill all the data");
        } 
           
    }