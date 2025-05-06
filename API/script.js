function emailSend(){

    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var messageBody = "Name " + userName +
    "<br/> Phone " + phone +
    "<br/> email " + email;
    Email.send({
        Host : "s1.maildns.net",
        Username : "leregaspi.student@asiancollege.edu.ph",
        Password : "345ABA1EC9505BFB51DAED233A455FBAD732",
        To : 'luwiedelmo2004@gmail.com',
        From : "leregaspi.student@asiancollege.edu.ph",
        Subject : "This is the subject",
        Body : "message body"
    }).then(
      message => {
        if(message=='OK'){
            swal("Successful", "You clicked the button!", "success");
        }
        else{
            swal("Error", "You clicked the button!", "Error");
        }
      }   
    );
}