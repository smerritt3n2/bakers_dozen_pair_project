/*================================================
 * Main JavaScript Engine
 =================================================*/
 document.getElementById("recaptch-form").addEventListener("submit",function(evt) // Listens for form submit event
 {
 
 var response = grecaptcha.getResponse();
 if(response.length == 0) { 
   //reCaptcha not verified
   alert("please verify you are humann!"); 
   evt.preventDefault();
   return false;
 }
});
/*================================================*/

