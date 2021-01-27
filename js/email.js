/*================================================
 * Main JavaScript Engine
 =================================================*/
function onSubmit() {
    var data = submit();

    if(validate()) {
        alert("Email has been delivered!");
    } else {
        
    }
}
 /*================================================*/

 /*================================================
 * Gathers Data from Form-submit
 =================================================*/
function submit() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["telephone"] = document.getElementById("telephone").value;
    formData["telephone"] = document.getElementById("telephone").value;
    formData["message"] = document.getElementById("message").value;
    formData["GDPR"] = document.getElementById("GDPR");
    return formData;
}
 /*================================================*/

  /*================================================
 * Gathers Data from Form-submit
 =================================================*/
function validate() {
    isValid = true;

    if (document.getElementById("name").value == "") { // If data is null, display error message and return false
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else { // If data is valid, hide error message and return true
        isValid = true;
        if(!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");

            // Checks if email is valid
            if (/\S+@\S+\.\S+/.test(document.getElementById("email").value)) { // If email data is valid, hide error message and return true
                isValid = true;
                if(!document.getElementById("emailValidationError").classList.contains("hide"))
                document.getElementById("emailValidationError").classList.add("hide");

                // Checks if phone is valid
                if (document.getElementById("telephone").value.length < 10) {
                    isValid = false;
                    document.getElementById("phoneValidationError").classList.remove("hide");
                } else {
                    isValid = true;
                    if(!document.getElementById("phoneValidationError").classList.contains("hide"))
                    document.getElementById("phoneValidationError").classList.add("hide");
                }
            } else { // If email data is invalid, display error message and return false
                isValid = false;
                document.getElementById("emailValidationError").classList.remove("hide");
            }
    }
    return isValid;
}
 /*================================================*/