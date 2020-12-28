 <?php                  
    $name = $_POST['name'];
    $email_address = $_POST['email'];
    $message = $_POST['message'];

    $errors = '';
    $myemail = 'ai4change@gmail.com';//<-----Put Your email address here.
    if(empty($_POST['name'])  ||
        empty($_POST['email']) ||
        empty($_POST['message']))
    {
        $errors .= "\n Error: all fields are required";
    }

    $subject="Contact from Website"; //Subject 
    $mailBody="Name: name\nEmail Address: $email_address\n\nMessage: $message";

    if($_POST["submit"]) {
        mail($name, $subject, $mailBody);
    }
                        
?>