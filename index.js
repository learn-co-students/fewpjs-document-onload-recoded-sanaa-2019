// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    let text= "This is really cool!";
    document.getElementById("text").innerHTML= text;
  });
   
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );