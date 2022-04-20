var userData=JSON.parse(localStorage.getItem('userData'));
    document.querySelector('form'),addEventListener('submit',login);
    function login()
    {
        event.preventDefault();
        var loginObj={
            email:document.getElementById("email").value,
            password:document.getElementById("password").value,
        }
        userData.forEach((element,index) => {
           if(loginObj.email==element.email && loginObj.password==element.password)
           {
               alert("Login Successfull");
               window.location.href='index.html';

           } 
           else{
               
               if(index==userData.length)
               {
                alert("Invalid Credentials")
                window.location.href='signup.html';
               }
           }
        });
    }