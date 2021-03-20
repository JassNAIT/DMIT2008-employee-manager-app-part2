window.addEventListener('load',function(){
  fetch(`/api/users`,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }

  })
  .then(res=>res.json())
  .then(result=>{
      if(result == ""){ 
          const errorTemplate =`<p>No User found.</p>`;
          document.querySelector('.users').innerHTML = errorTemplate;
    }else{
      result.forEach(function(user, index) {
         const successTemplate = `<ul>
         <li><span><b>User ID:</b></span> ${user['userid']}</li>
         <li><span><b>Username:</b></span> ${user['username']}</li>
         <li><span><b>Email:</b></span> ${user['email']}</li>
         <li><span><b>Password:</b></span> ${user['password']}</li>
         </ul>`;
         document.querySelector('.users').innerHTML += successTemplate;
      })
      }
  }).catch(err => {
    console.log("Error Reading data " + err);
  })

  
  })
