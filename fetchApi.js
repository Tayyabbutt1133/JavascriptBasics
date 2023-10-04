// Fetching Api's in Javascript 

let p=fetch("https://catfact.ninja/fact");
p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
      return response.json()
}).then((response2)=>{
     console.log(response2);
});



// Request Headers 
//Request headers, set using the setRequestHeader() method in XMLHttpRequest or the headers property in the Fetch API, provide information about the request being made, such as the content type or authorization credentials.


// Response Headers
// Response headers, accessed through the get() method in Fetch API or the getResponseHeader() method in XMLHttpRequest, contain information sent by the server in response to a request, like the content type, caching directives, or cookies.

