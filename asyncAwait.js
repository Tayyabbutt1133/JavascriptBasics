// What is a Async Await Function in JavaScript?
// Answer: Async Await is a special syntax to work with promises in a more comfortable fashion.
// Async functions are a combination of promises and generators, and basically, they are a higher level abstraction over promises.
// If you know how to use promises, then understanding async await is not a big deal.\

// We can make any function async and the integrate Promises in that function 

// Async Function always return the promise and wraps non promise in it 

// Example 1
// async function hello()
// {
//     return 5;
// }
// hello().then((x)=>{
//     console.log(x);
// })

// // Example 2
// async function testing()
// {
//     let lahoreWeather=new Promise((resolve,reject)=>{
//            setTimeout(()=>{
//             console.log("Lahore Weather:- 27 deg");
//            },1000)
//     })

//     let karachiWeather=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Karachi Weather is:- 45 deg");
//         },2000)
//     })
//     lahoreWeather.then();
// }
// console.log("Welcome to weather control Room")
// // Function calling
// testing();


// // Example 3
// async function fetchWeather(location) {
//     try {
//       // Fetch weather data from an API (async operation)
//       const response = await fetch(`https://api.weather.com/${location}`);
      
//       // Check if the response status is okay
//       if (!response.ok) {
//         throw new Error('Failed to fetch weather data');
//       }
  
//       const data = await response.json(); // Parse JSON response (async operation)
      
//       // Process and display the weather data
//       console.log(`Weather in ${location}: ${data.temperature}°C`);
//     } catch (error) {
//       // Handle errors gracefully
//       console.error(`Error: ${error.message}`);
//     }
//   }
  

// Example 4

  function delaycalling()
  {
     return new Promise((resolve,reject)=>{
         setTimeout(() => {
            resolve("Resolved");
         }, 4000);
     })
  }


async function delaying()
{
  console.log("Waiting");
  const Check=await delaycalling();
  console.log(Check);
}
  
// Function calling
delaying();




