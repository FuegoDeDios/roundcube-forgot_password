function forgot_password(){
var form = $('<form action="https://independenthotelreservations.com/webmail/plugins/forgot_password/forgot_password.php" method="POST"><label>Please Enter your Alternate Email address, the one you signed up to the site with.</label><input type="text" name="email" required="true"><button type="submit">Change Password</button></form>');
$('#taskbar').append(form);

}

$(document).ready(function($){

  $('#taskbar').append('<a class="home" id="forgot_password" href="javascript:forgot_password();">Forgot Your Password</a>');

});
