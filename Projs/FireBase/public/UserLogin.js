function UserSignUp(){
    const email = UserEmail.value;
    const password = userPassword.value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(cred =>{
        console.log(cred)
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        });
        EmailVerification();
    }

function UserLogIn(){

    const password = userPassword.value
    const email    = UserEmail.value
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(cred => {
        //console.log(cred)
        alert("Shit aint working");
        
            console.log("Logged in")
            LogIn.style.display  = "none";
            SignUp.style.display = "none";
            UserStateChange();
            window.location.href = "/register.html";
            
            console.log("Window should be replaced ");
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
      })
    }

function UserStateChange()
{
    var user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            UserStatus.innerHTML = "Logged In"
            location.replace("/register.html")
        } else {
        }
      });
    }

function LogOut(){
    firebase.auth().signOut().then(function(){
        //Sign out Successful
        UserStatus.innerHTML = "Signed Out. Email/Password to Log in."
    })

}
function EmailVerification(){
    const email = UserEmail.value   
    var actionCodeSettings = {
        url             : location.href ,
    handleCodeInApp     : true
    };    
    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        .catch(function(error) {

        });
} 

function UserStats(){
    
}


