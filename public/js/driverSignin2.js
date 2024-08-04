



import { driverSigninController } from "../controllers/driverSigninController.js";



// //Event Listener Registration
// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting the traditional way


//     //Form Data Retrieval
//     const username = document.getElementById('UserName').value;
//     const password = document.getElementById('password').value;


//     //method: Specifies the HTTP method (POST in this case).
//     //headers: Specifies the content type of the request body (application/x-www-form-urlencoded), indicating that the data is URL-encoded form data.
//     //body: Contains the actual data being sent. It's a string created using template literals (${}) where encodeURIComponent() ensures that special characters in the username and password are properly encoded.
//     fetch('/HomeDriver', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: `UserName=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
//     })
//     //Handling Server Response
//     .then(response => response.text())
//     .then(data => {
//         if (data.includes('Driver Dashboard')) {
//             // location.href = '/HomeDriver'; // Redirect to the dashboard page
//         } else {
//             alert(data); // Display any errors (e.g., wrong password or user not found)
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred. Please try again.');
//     });
// });

// //Explanation: After sending the request, .then() is used to handle the response asynchronously:
// //response.text() converts the response body to text format.
// //The next .then() block receives the data from the response.
// //If data includes the string 'Driver Dashboard', it assumes successful login and updates the entire body of the current HTML document (document.body.innerHTML = data;). This would typically render a new page or dashboard.
// //If the response does not include 'Driver Dashboard', it alerts the user with the response data, which could be an error message like "Wrong password or user not found".
// //.catch() is used to handle any errors that might occur during the fetch request, logging the error to the console and alerting the user with a generic error message.