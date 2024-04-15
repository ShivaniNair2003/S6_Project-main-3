

// // <script>
// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// // apiKey: "AIzaSyDoxfFKwCiYFKLEbC8IX-5ZMwxAnh6dpC4",
// // authDomain: "alumni-website-6c196.firebaseapp.com",
// // projectId: "alumni-website-6c196",
// // storageBucket: "alumni-website-6c196.appspot.com",
// // messagingSenderId: "113955954393",
// // appId: "1:113955954393:web:b0ff98694d212dab3568c8",
// // measurementId: "G-0LDKHBW5BM"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// // </script>


// <script>
// 	document.addEventListener("DOMContentLoaded", function() {
// 	  // Initialize Firebase
// 	  const firebaseConfig = {
// 		apiKey: "AIzaSyDoxfFKwCiYFKLEbC8IX-5ZMwxAnh6dpC4",
// 		authDomain: "alumni-website-6c196.firebaseapp.com",
// 		projectId: "alumni-website-6c196",
// 		storageBucket: "alumni-website-6c196.appspot.com",
// 		messagingSenderId: "113955954393",
// 		appId: "1:113955954393:web:b0ff98694d212dab3568c8",
// 		measurementId: "G-0LDKHBW5BM"
// 		};
  
// 	  // Initialize Firebase
// 	  const app = firebase.initializeApp(firebaseConfig);
// 	  const analytics = firebase.analytics();
  
// 	  // Get a reference to the Firebase authentication service
// 	  var auth = firebase.auth();
  
// 	  // Function to handle signup
// 	  function signUp() {
//     // Get user inputs
//     var username = document.getElementById('username').value;
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     var confirmPassword = document.getElementById('confirm_password').value;
//     var userType = document.querySelector('input[name="userType"]:checked').value;

//     // Validate password match
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     // Sign up the user with email and password
//     auth.createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in 
//         var user = userCredential.user;
//         console.log("User signed up:", user.uid);

//         // Additional actions based on user type (alumni or student)
//         if (userType === 'alumni') {
//           // Perform actions for alumni
//           console.log("User is an alumni");
//           // Redirect to alumni-specific page or perform other actions
//         } else if (userType === 'student') {
//           // Perform actions for student
//           console.log("User is a student");
//           // Redirect to student-specific page or perform other actions
//         }

//         // Redirect to profile or dashboard page
//         window.location.href = "profile.html";
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.error("Error signing up:", errorMessage);
//         // Handle error, e.g., display error message to user
//       });
//   }
// 	});
//   </script>