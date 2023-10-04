// What is a Promise in JavaScript?
// Answer: A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
// // A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.



// In simple words  promise is the function which works in the back while we are doing some other work in the front end.
// let p3=new Promise((resolve,reject)=>{
//     console.log("Promise is Pending");
//        setTimeout(()=>{
//             console.log("Promise work is fulfilled");
//            resolve(true);
//        },5000)
// })
// // Then and catch in promises are used to handle the promise, in simple words then is used to handle the fulfilled promise and catch is used to handle the rejected promise.
// p3.then((value)=>{
//      console.log(value);
// });

// let p2=new Promise((resolve,reject)=>{
//     console.log("Promise is Pending");
//     setTimeout(()=>{
//         console.log("Promise work is rejected");
//         reject(false);
//     },5000)
// })

// p2.catch((value)=>{
//   console.log(value);
// })

// // Promise chaining and then calls are used to handle the promise.

// // Promises Chaining
// let p=new Promise((resolve,reject)=>{
//     console.log("PENDING!");
//     setTimeout(() => {
//         resolve("Promise is fulfilled")
//     }, 2000);
// })
// p.then((value)=>{
//       console.log(value);
//       let p2=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Promise 2 is fulfilled");
//         },2000)
//       })
//       return p2;
// }).then((value)=>{
//     console.log(value);
// })

// const loadScript = (src) => {
//     return new Promise(resolve => {
//         let script = document.createElement("script");
//         script.type = "text/javascript";
//         script.src = src;
//         document.body.appendChild(script);
//         script.onload = () => {
//             resolve(1);
//         }
//         script.onerror=()=>{reject(0)};
//     });
// }


   // Example 1:- Let say you create a User login and you have to perform 3 tasks include the login task, then welcome message and then log registration message.
     
 function registerUser(userData)
 {
  return UserDatainDatabase(userData)
    .then(SendWelcomeEmail)
    .then(LoginRegistration)
    .catch(handleError);
 }
     function UserDatainDatabase(userData)
     {
           return new Promise((resolve,reject)=>{
            setTimeout(()=>{
              console.log("User Registered in the Database");
              resolve(userData);
            }, 2000)
           })
     }

   function SendWelcomeEmail(userData)
   {
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log("Welcome!");
          resolve(userData);
        },2000)
      })
   }

     function LoginRegistration()
     {
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log("Registration Done!");
        },2000)
      })
     }

   function handleError()
   {
     console.error("Error");
   }

   const user={
    username:"Tayyeb",
    email:"tayyebbutt966@gmail.com"
   };

   // Function calling
  registerUser(user);
console.log("User details are:", user);














































































