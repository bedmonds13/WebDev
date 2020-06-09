var db = firebase.firestore();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('User signed in');
    } else {
        console.log("User not signed in")
    }
  });

function SetUserInfo() 
{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            db.collection('users').doc(user.uid).get()
            .then(function(doc){
                console.log(doc.data());
            })
            .catch(function(error){
                console.log("Error getting document: ", error);
            });
        }
    })
}


 function addCourse()
 {
    ClassBadge = classBadge.value
    ClassName = className.value

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            db.collection('users').doc(user.uid).set({
                RegisteredCourse: ClassName,
                RegisteredBadge: ClassBadge,
                email: user.email
                }).then(function() {
                    console.log("Document successfully written!");
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });
        } else {
            console.log("User not signed in")
        }
      });

   
               
}
