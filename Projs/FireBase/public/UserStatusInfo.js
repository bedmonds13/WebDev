
function intializeApp(){
    firebase.initializeApp({
        apiKey: "AIzaSyD-41kcPA8yWV3r_4L8V29nsSc5e1FVrbE",
        authDomain: "servdev-744a0.firebaseapp.com",
        databaseURL: "https://servdev-744a0.firebaseio.com",
        projectId: "servdev-744a0",
        storageBucket: "servdev-744a0.appspot.com",
        messagingSenderId: "801010395794",
        appId: "1:801010395794:web:8c789e63ceeb386442944b",
        measurementId: "G-5TLM17Q618"
    });
}

function UserSignUp(){
    var db = firebase.firestore();
    const email    = UserEmail.value;
    const password = userPassword.value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(cred =>{
        return db.collection('users').doc(cred.user.uid).set({
            email: UserEmail.value
        });
      
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode    = error.code;
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
        console.log(cred);
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                window.location = '/register.html';
            } else {
                console.log("Won't switch");
            }
          });
        })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode    = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
      })
    }
function LogOut(){
    firebase.auth().signOut().then(function(){
        //Sign out Successful
        UserStatus.innerHTML = "Signed Out. Email/Password to Log in."
    })

}
function EmailVerification(){
    const email            = UserEmail.value   
    var actionCodeSettings = {
        url             : location.href ,
    handleCodeInApp     : true
    };    
    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        .catch(function(error) {

        });
} 
function UserData(){
    var user = firebase.auth().currentUser;
    name     = user.name;
    email    = user.email;
    course   = user.course;   
}
function UserProfile(){
    var user =  firebase.auth().currentUser;
    if(user)
    {

    }   else{
        
    }

}
function LoadProfile(){
    var user =  firebase.auth().currentUser;
    if(user != null){
        console.log(user);
    }
    else{
        alert("no sign in");
    }
}
function CheckUserState(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log(user);
        }
        else{
            console.log("Not logged in");
        }
    });
}

