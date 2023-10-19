function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true,
    });
}

// General Messages
define("NOT_AUTHORIZE_ACTION", "Not authorize for this action")
define("REQUEST_SUCCESSFUL", "Request Successful.");
define("INVALID_PASSWORD", "Invalid password. Use Alphanumeric and Special Characters");
define("INVALID_USERNAME", "Invalid User Name Format")
define("INVALID_FULL_NAME", "Invalid Full Name Format")
define("LOGIN_SUCCESS", "You are Successfully Logged in.");
define("WENT_WRONG", "Something Went Wrong!");
define("EMAIL_RECEIVED_SHORTLY", "You will Receive an Email Shortly.");
define("MISSING_PARAMETER", "Check Missing Fields.");
define("MISSING_PAGE_NUMBER", "Missing Page Number.");
define("AUTHENTICATION_FAILED", "Authentication Failed!");
define("PERMISSION_DENIED", "You don't have permission for this operation!");
define("ALREADY_EXIST", "Already exist!");
define("CODE_NOT_MATCH", "Code not matched");
define("PASSWORD_SUCCESSFULLY_CHANGE", "Password Successfully Changed");
define("TOKEN_NOT_FOUND", "Token not found");
define("INVALID_TOKEN", "Your token is invalid");
define("INVALID_EMAIL", "Email format is invalid");
define("ALREADY_BLOCKED", "User already blocked");
define("WRONG_PASSWORD", "Wrong Password")
define("OLD_PASSWORD_NOT_MATCH", "Old password not match");
define("PASSWORD_NOT_MATCH", "Passwords not match");
// User Messages
define("USER_NOT_EXIST", "User not exist.");
define("USER_ADDED_SUCCESS", "User was added successfully.");
define("EMAIL_EXIST", "Oops - email already exists.");
define("EMAIL_NOT_EXIST", "Email does not exist.");
define("DUPLICATE_USERNAME_EMAIL", "Duplicate Username or Emails");
define("INVALID_REQUEST", "Your request cannot proceed");
define("ALREADY_REQUESTED", "Request already sent");
define("USERNAME_EXIST", "Username not available");
define("NOT_REQUESTED", "Not any request found")
define("CREDIT_AMOUNT_NOT_CORRECT", "Incorrect credit amount")
